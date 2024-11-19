import express from "express";
import { videojuegos , con , log , sing , inicio} from "../controllers/paginas.js";
import {logInRes} from "../controllers/gestionUsuarios/logInController.js"
import {signInRes} from "../controllers/gestionUsuarios/signInController.js"

const routerInicio = express.Router();
//routing
routerInicio.get('/', inicio);              //Pagina de inicio
routerInicio.get('/log' ,log);          //Pagina de Log In
routerInicio.get('/sign' ,sing);        //Pagina de Sign In
routerInicio.get('/vid' ,videojuegos);                //Pagina de xbox
routerInicio.get('/con' ,con);                  //Pagina de las consolas
//routerInicio.post('/SignIn' ,signIn);       //registro usuario
export default routerInicio;