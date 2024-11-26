//modelos
import {check, validationResult} from 'express-validator';
import DatosPago from "../../models/DatoPago.js";
import Productos from "../../models/Producto.js";
import ProductoVenta from "../../models/ProductosVenta.js";
import Ventas from "../../models/Venta.js";
import Usuarios from "../../models/Usuario.js";
//import itemsCarrito from "../../public/js/carrito.js";
//renderiza el formulario de inicio de sesion
const inicio = async (req, res) => {
    try {
        const carrito =  req.session.carrito || []; 
        // Obtener solo 4 productos de la base de datos
        const produc = await Productos.findAll({
            limit: 12, // Limita a 4 productos
        });

        // Renderizar la vista y pasar los productos
        res.render('user/inicioUser', { 
            produc,
            carrito,
            csrf: req.csrfToken(), 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Hubo un error al obtener los productos");
    }
};

const registrarTarjetaLink = async (req, res) => {
    console.log(res.locals.usuario);
    res.render("pago/metodo", {
        csrf: req.csrfToken(), 
    });
};

const registrarTarjeta = async (req, res) => {
    // Variables de sesión de usuarios
    const usuario = res.locals.usuario;
    let valido = await validacionFormularioRT(req);
    if (!valido.isEmpty()) {
        return res.render("pago/metodo", {
            csrf: req.csrfToken(),
            errores: valido.array(),
        });
    }
    const { id } = usuario; // Extraer el id del usuario
    const {numero_tarjeta, cvv, caducidad, beneficiario} = req.body
    console.log(numero_tarjeta, cvv, caducidad, beneficiario);
    // Crear el registro directamente sin llamar a save
    const datoP = await DatosPago.create({
        id_usuario: id,
        numero_tarjeta: req.body.numero_tarjeta,
        cvv: req.body.cvv,
        fecha_vencimiento: req.body.caducidad,
        beneficiario: req.body.beneficiario,
    });
    await datoP.save();
    // Mostrar mensaje de confirmación
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
        const carrito =  req.session.carrito || []; 
        const { id } = usuario; // Extraer el id del usuario
        // Obtén las opciones desde la base de datos
        const opcionesPago = await DatosPago.findAll({
            where: { id_usuario: id},
        });
        // Renderiza la vista, pasando las opciones como datos
        res.render("pago/pago", {
            csrf: req.csrfToken(), 
            opcionesPago,
            carrito
        });
    } catch (error) {
        console.error('Error al obtener las opciones:', error);
        res.status(500).send('Error interno del servidor');
    }
};

const finalizarCompra = async (req, res) => {
    // Variable de total de compra
    let totalCompra = 0;
    
    // Variables de sesión de usuarios
    const usuario = res.locals.usuario;
    let valido = await validacionFormularioFC(req);
    const { opcionPago } = req.body;

    if (!valido.isEmpty()) {
        return res.render("pago/pago", {
            csrf: req.csrfToken(),
            errores: valido.array(),
        });
    }

    const carrito =  req.session.carrito || []; 
    if (carrito.length == 0) {
        return res.render("pago/pago", {
            csrf: req.csrfToken(),
            errores: [{ msg: 'No hay artículos en el carrito' }],
        });
    }

    try {
        // Usar el ID de la opción seleccionada
        if (!opcionPago) {
            return res.status(404).send('Tarjeta no encontrada');
        }

        const { id } = usuario; // Extraer el id del usuario
        const venta = await Ventas.create({
            id_usuario: id,
            id_datopago: opcionPago,
        });

        // Recorrer los artículos del carrito y crear los detalles de la venta
        for (const objeto of carrito) {
            const item = await ProductoVenta.create({
                id_venta: venta.id_venta,
                id_producto: objeto.id,
                cantidad: objeto.cantidad,
                precio_unidad: objeto.precio,
                subtotal: objeto.cantidad * objeto.precio,
            });

            totalCompra += item.subtotal;

            // Actualizar el stock del producto
            const producto = await Productos.findByPk(objeto.id);
            if (producto) {
                await producto.update({
                    stock: producto.stock - objeto.cantidad,
                });
            }
        }

        // Actualizar el total de la venta
        await venta.update({ total_venta: totalCompra });

        // Renderizar la confirmación
        res.render("credenciales/confirmacion", {
            pagina: "Compra finalizada",
            mensaje: "Gracias por tu compra. Tu pedido ha sido procesado exitosamente.",
            csrf: req.csrfToken(),
        });
    } catch (error) {
        console.error('Error al procesar la compra:', error);
        res.status(500).send('Error interno del servidor');
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
    await check("numero_tarjeta")
    .notEmpty()
    .withMessage("El numero de la tarjeta no debe ser vacio")
    .run(req);
    await check("caducidad")
    .notEmpty()
    .withMessage("Caducidad invalida")
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
export { inicio, registrarTarjeta, registrarTarjetaLink, finalizarCompra, finalizarCompraLink };