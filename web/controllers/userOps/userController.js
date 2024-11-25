import Productos from "../../models/Producto.js";// Modelo para productos
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

export {inicio};