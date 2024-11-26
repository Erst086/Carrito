import Productos from "../../models/Producto.js";
import ProductoVenta from "../../models/ProductosVenta.js";
import Ventas from "../../models/Venta.js";

const ventas = async (req, res) => {
    try {
        const ventas = await Ventas.findAll();  // Obtiene todos los usuarios de la base de datos
        return res.render('gesVentas/ventasAdmin', { ventas, csrf: req.csrfToken(), });  // Renderiza la vista con los usuarios
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        return res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}

const Detallesventas = async (req, res) => {
    try {
        const productosVentas = await ProductoVenta.findAll({
            where:{
                id_venta: req.params.id_venta,
            },
        });
        //se obtienen todos los detalles de la venta
        const venta = await Ventas.findByPk(req.params.id_venta);
        //ruta para los detalles de las ventas
        return res.render('gesVentas/detalleVenta', { productosVentas, venta, csrf: req.csrfToken(), });  // Renderiza la vista con los usuarios
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener los datos' }); // Error en formato JSON
    }
}


export {ventas, Detallesventas};