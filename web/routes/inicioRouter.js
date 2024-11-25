import express from "express";
import { 
    getDatos,
    inicio 
} from "../controllers/paginas.js";
import { 
    inicioSesion, 
    signLink, 
    signIn, 
    confirmacionRegistro, 
    logIn, 
    logOut 
} from "../controllers/Credenciales/sesionController.js";

const routerInicio = express.Router();

// Rutas
routerInicio.get('/', inicio);                  // Página de inicio
routerInicio.get('/logIn', inicioSesion);       // Enlace a Log In
routerInicio.get('/signIn', signLink);          // Enlace a Sign In
routerInicio.post('/signIn', signIn);           // Operación de registro de usuario
routerInicio.get('/confirmacion/:token', confirmacionRegistro); // Confirmación de registro
routerInicio.post('/logIn', logIn);             // Operación de inicio de sesión
routerInicio.get('/logOut', logOut);            // Cierre de sesión

// Rutas de productos
routerInicio.get("/:tipo(play|nin|xbox|inicio|con)", getDatos); 

export default routerInicio;
