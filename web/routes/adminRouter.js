import express from "express";
import Usuario from '../models/Usuario.js';
import Rol from '../models/Rol.js';
import rutaProteger from "../middleware/rutasProteger.js";
import verificarRol from "../middleware/verificarRol.js";
import { inicio } from "../controllers/adminOps/adminController.js";
import { crearProducto, obtenerProductos, obtenerProductoPorId, actualizarProducto, eliminarProducto, } from '../controllers/productosController.js';

const routerAdmin = express.Router();

routerAdmin.get('/', rutaProteger, verificarRol([1]), inicio);                  //Pagina de inicio para administrador 
// Ruta para mostrar todos los productos
routerAdmin.get('/productos', rutaProteger, verificarRol([1]), async (req, res) => {
try {
    const productos = await obtenerProductos(req, res);  // Asegúrarse de que esta llamada espere a la función
    res.render('productos/index', { productos }); // Renderiza la vista con los productos
} catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).send('Error al obtener los productos');
}
});

// Ruta para el formulario de creación
routerAdmin.get('/productos/crear', rutaProteger, verificarRol([1]), (req, res) => {
res.render('productos/crear');  // Vista para crear un producto
});

// Crear producto
routerAdmin.post('/productos/crear', rutaProteger, verificarRol([1]), crearProducto);

// Ruta para el formulario de edición
routerAdmin.get('/productos/editar/:id_producto', rutaProteger, verificarRol([1]), async (req, res) => {
try {
    const producto = await obtenerProductoPorId(req, res);  // Espera a que la función obtenga el producto
    if (producto) {
    res.render('productos/editar', { producto });  // Renderiza la vista de edición
    } else {
    res.status(404).send('Producto no encontrado');
    }
} catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).send('Error al obtener el producto');
}
});

// Editar producto
routerAdmin.post('/productos/editar/:id_producto',rutaProteger, verificarRol([1]),  actualizarProducto);

// Eliminar producto
routerAdmin.post('/productos/eliminar/:id_producto', rutaProteger, verificarRol([1]), eliminarProducto);

// Ruta para obtener todos los usuarios y renderizar la vista
routerAdmin.get('/usuarios', rutaProteger, verificarRol([1]), async (req, res) => {
  try {
    // Obtener los usuarios con sus roles
    const usuarios = await Usuario.findAll({
      include: {
        model: Rol,
        attributes: ['nombre'],  // Ajusta los campos del modelo Rol
      },
    });

    // Renderiza la vista 'user/usuarios' pasando los usuarios
    res.render('user/usuarios', { usuarios });
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).send('Error al obtener los usuarios');
  }
});

export default routerAdmin;