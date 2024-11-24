import express from "express";
import { xbox , play , nin , con , inicio} from "../controllers/paginas.js";
import {inicioSesion, signLink, signIn, confirmacionRegistro, logIn} from "../controllers/Credenciales/sesionController.js"

const routerInicio = express.Router();
//routing
routerInicio.get('/', inicio);                  //Pagina de inicio
routerInicio.get('/logIn', inicioSesion);       //Enlace a Log In
routerInicio.get('/signIn', signLink);          //Enlace a Sign In
routerInicio.post('/signIn', signIn);           //Operacion de registro de usuario
routerInicio.get('/confirmacion/:token', confirmacionRegistro);    //Confirmacion de registro
routerInicio.post('/logIn' , logIn);            //Operacion de inicio de sesion


routerInicio.get('/xbox' ,xbox);                //Pagina de xbox
routerInicio.get('/play' ,play);                //Pagina de xbox
routerInicio.get('/nin' ,nin);                  //Pagina de xbox
routerInicio.get('/con' ,con);                  //Pagina de las consolas
//routerInicio.post('/SignIn' ,signIn);       //registro usuario
export default routerInicio;