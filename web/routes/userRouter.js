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
//routerUser.post("/agregarCarrito/:id", rutaProteger, verificarRol([2]), agregarCarrito);  

export default routerUser;