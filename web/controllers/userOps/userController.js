//modelos
import DatosPago from "../../models/DatoPago.js";
import Productos from "../../models/Producto.js";
import ProductoVenta from "../../models/ProductosVenta.js";
import Ventas from "../../models/Venta.js";
import Usuarios from "../../models/Usuario.js";
//renderiza el formulario de inicio de sesion
const inicio = async (req, res) => {
    try {
        // Obtener solo 4 productos de la base de datos
        const produc = await Productos.findAll({
            limit: 12, // Limita a 4 productos
        });

        // Renderizar la vista y pasar los productos
        res.render('user/inicioUser', { 
            produc,
            csrf: req.csrfToken(), 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Hubo un error al obtener los productos");
    }
};

const registrarTarjetaLink = async (req, res) => {
    res.render("pago/metodo", {
        csrf: req.csrfToken(), 
    });
};

const registrarTarjeta = async (req, res) => {
    //variables de sesion de usuarios
    const usuario = res.locals.usuario;
    let valido = await validacionFormularioRT(req);
    if (!valido.isEmpty()) {
        return res.render("pago/metodo", {
            csrf: req.csrfToken(),
            errores: valido.array(),
        });
    }
    const { id } = usuario; // Extraer el id del usuario
    const datP = DatosPago.create({
        id_usuario: id,
        numero_tarjeta: req.body.numeroTarjeta,
        cvv: req.body.cvv,
        beneficiario: req.body.beneficiario,
    });
    await datP.save();
    //mostrar mensaje de confirmacions
    res.render("credenciales/confirmacion", {
        pagina: "Tarjeta registrada exitosamente",
        mensaje: "Ya puede hacer uso de su tarjeta para realizar compras",
        csrf: req.csrfToken(),
    });
};

const finalizarCompraLink = async (req, res) => {
    //variables de sesion de usuarios
    const usuario = res.locals.usuario;
    try {
        const { id } = usuario; // Extraer el id del usuario
        // Obtén las opciones desde la base de datos
        const opcionesPago = await DatosPago.findAll({
            where: { id_usuario: id},
        });
        // Renderiza la vista, pasando las opciones como datos
        res.render("pago/pago", {
            csrf: req.csrfToken(), 
            opcionesPago,
        });
    } catch (error) {
        console.error('Error al obtener las opciones:', error);
        res.status(500).send('Error interno del servidor');
    }
};

const finalizarCompra = async (req, res) => {
    //variable de total de compra
    let totalCompra;
    //variables de sesion de usuarios
    const usuario = res.locals.usuario;
    let valido = await validacionFormularioFC(req);
    const { opcionPago } = req.body;
    if (!valido.isEmpty()) {
        return res.render("pago/pago", {
            csrf: req.csrfToken(),
            errores: valido.array(),
        });
    }
    const itemsCarrito = global.listaObjetos || [];
    if (itemsCarrito.length == 0){
        return res.render("pago/pago", {
            csrf: req.csrfToken(),
            errores: [{msg:'No hay articulos en el carrito'}]
        });
    }
    try {
        // Usar el ID de la opción seleccionada
        if (!opcionPago) {
            return res.status(404).send('Tarjeta no encontrada');
        }
        const { id } = usuario; // Extraer el id del usuario
        const venta = Ventas.create({
            id_usuario: id,
            id_datopago: opcionPago
        });
        await venta.save();
        itemsCarrito.forEach(async (objeto) => {
            item = ProductoVenta.create({
                id_venta: venta.id_venta,
                id_producto: objeto.id_producto,
                cantidad: objeto.cantidad,
                precio_unidad: objeto.precio,
                subtotal: objeto.cantidad * objeto.precio,
            })
        await item.save();
        totalCompra = totalCompra + item.subtotal;
        
        });
    } catch (error) {
        console.error('Error al procesar la compra:', error);
        res.status(500).send('Error interno del servidor');
    }
};

const agregarCarrito = async (req, res) => {
    
    const { id } = req.params;
    try {
        // Por ejemplo, buscar el producto por su ID y asociarlo al carrito del usuario:
        const producto = await Productos.findByPk(id);
        if (!producto) {
          return res.status(404).send("Producto no encontrado");
        }
    }catch (error) {
        console.error("Error al agregar producto al carrito:", error);
        res.status(500).send("Error al agregar producto al carrito");
    }
};
async function validacionFormularioFC(req) {
    await check("tarjeta")
    .notEmpty()
    .withMessage("Seleccione una tarjeta")
    .run(req);
    let salida = validationResult(req);
    return salida;
};
async function validacionFormularioRT(req) {
    await check("numeroTarjeta")
    .notEmpty()
    .withMessage("El numero de la tarjeta no debe ser vacio")
    .run(req);
    await check("cvv")
    .notEmpty()
    .withMessage("Ingresa un cvv")
    .run(req);
    await check("beneficiario")
    .notEmpty()
    .withMessage("Se requiere el nombre del beneficiario")
    .run(req);
    let salida = validationResult(req);
    return salida;
};
export { inicio, registrarTarjeta, registrarTarjetaLink, finalizarCompra, finalizarCompraLink , agregarCarrito};