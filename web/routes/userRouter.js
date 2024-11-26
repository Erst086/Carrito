import express from "express";
import rutaProteger from "../middleware/rutasProteger.js";
import verificarRol from "../middleware/verificarRol.js";
import { inicio, registrarTarjeta, registrarTarjetaLink, finalizarCompra, finalizarCompraLink} from "../controllers/userOps/userController.js";

const routerUser = express.Router();

routerUser.get('/', rutaProteger, verificarRol([2]), inicio);                  //renderiza de inicio para usuario
//operaciones de compra
routerUser.get('/registrarTarjeta', rutaProteger, verificarRol([2]), registrarTarjetaLink);                  //renderiza pagina para registrar tarjeta
routerUser.post('/registrarTarjeta', rutaProteger, verificarRol([2]), registrarTarjeta);                     //registra la tarjeta
routerUser.get('/finalizarCompra', rutaProteger, verificarRol([2]), finalizarCompraLink);                    //renderiza la pagina para terminar compra
routerUser.post('/finalizarCompra', rutaProteger, verificarRol([2]), finalizarCompra);                    //Operacion de compra
//carrito
routerUser.post('/agregarCarrito',rutaProteger, verificarRol([2]), (req, res) => {
    const { id, nombre, precio, img } = req.body;
    // Inicializa el carrito si no existe
    if (!req.session.carrito) {
        req.session.carrito = [];
    }
    // Verifica si el producto ya está en el carrito
    const productoIndex = req.session.carrito.findIndex(producto => producto.id === id);
    if (productoIndex !== -1) {
        // Incrementa la cantidad si el producto ya está en el carrito
        req.session.carrito[productoIndex].cantidad++;
    } else {
        // Agrega el producto al carrito si no existe
        req.session.carrito.push({ id, nombre, precio: parseFloat(precio), img, cantidad: 1 });
        console.log(req.session.carrito)
    }
    res.redirect('/user/');
});

// Vaciar el carrito
routerUser.get('/vaciarCarrito',rutaProteger, verificarRol([2]), (req, res) => {
    req.session.carrito = [];
    res.redirect('/user/');
});

// Eliminar un producto específico
routerUser.post('/eliminarProducto',rutaProteger, verificarRol([2]), (req, res) => {
    const { id } = req.body;
    req.session.carrito = req.session.carrito.filter(item => item.id !== id);
    res.redirect('/user/');
});


export default routerUser;