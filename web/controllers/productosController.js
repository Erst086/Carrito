import Producto from '../models/Producto.js';

export const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        return res.status(201).json(nuevoProducto); // Responde con el nuevo producto en formato JSON
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al crear el producto' }); // Error en formato JSON
    }
};

// productosController.js

// Obtiene todos los productos
export const obtenerProductos = async (req, res) => {
    try {
      const productos = await Producto.findAll();  // Obtiene los productos de la base de datos
      return productos;  // Devuelve los productos, no responde
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw error;  // Lanza el error para que lo maneje el middleware de la ruta
    }
  };
  
  // Obtiene un producto por ID
  export const obtenerProductoPorId = async (req, res) => {
    try {
      const producto = await Producto.findByPk(req.params.id_producto);
      return producto;  // Devuelve el producto, no responde
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      throw error;  // Lanza el error para que lo maneje el middleware de la ruta
    }
  };
  

export const actualizarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id_producto);
        if (producto) {
            await producto.update(req.body);
            return res.status(200).json(producto); // Responde con el producto actualizado en formato JSON
        } else {
            return res.status(404).json({ error: 'Producto no encontrado' }); // Error si no se encuentra el producto
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al actualizar el producto' }); // Error en formato JSON
    }
};

export const eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id_producto);
        if (producto) {
            await producto.destroy();
            return res.status(200).json({ message: 'Producto eliminado correctamente' }); // Responde con mensaje de éxito
        } else {
            return res.status(404).json({ error: 'Producto no encontrado' }); // Error si no se encuentra el producto
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al eliminar el producto' }); // Error en formato JSON
    }
};
export const editarProducto = async (req, res, next) => {
    try {
        const producto = await Producto.findByPk(req.params.id_producto);
        if (producto) {
            return res.render('productos/editar', { producto }); // Renderiza el formulario con los datos del producto
        } else {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el producto para editar:', error);
        next(error); // Pasa el error al manejador global
    }
};
