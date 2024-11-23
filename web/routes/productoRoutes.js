import express from 'express';
import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto,
} from '../controllers/productosController.js';

const router = express.Router();

// Ruta para mostrar todos los productos
router.get('/productos', async (req, res) => {
  try {
    const productos = await obtenerProductos(req, res);  // Asegúrarse de que esta llamada espere a la función
    res.render('productos/index', { productos }); // Renderiza la vista con los productos
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).send('Error al obtener los productos');
  }
});

// Ruta para el formulario de creación
router.get('/productos/crear', (req, res) => {
  res.render('productos/crear');  // Vista para crear un producto
});

// Crear producto
router.post('/productos/crear', crearProducto);

// Ruta para el formulario de edición
router.get('/productos/editar/:id_producto', async (req, res) => {
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
router.post('/productos/editar/:id_producto', actualizarProducto);

// Eliminar producto
router.post('/productos/eliminar/:id_producto', eliminarProducto);

export default router;
