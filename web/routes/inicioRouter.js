import express from "express";
import { xbox , play , nin , con , log , sing , inicio , admin} from "../controllers/paginas.js";
import {logInRes} from "../controllers/gestionUsuarios/logInController.js"
import {signInRes} from "../controllers/gestionUsuarios/signInController.js"

const routerInicio = express.Router();
//routing
routerInicio.get('/', inicio);              //Pagina de inicio
routerInicio.get('/log' ,log);          //Pagina de Log In
routerInicio.get('/sign' ,sing);        //Pagina de Sign In
routerInicio.get('/xbox' ,xbox);                //Pagina de xbox
routerInicio.get('/play' ,play);                //Pagina de xbox
routerInicio.get('/nin' ,nin);                  //Pagina de xbox
routerInicio.get('/con' ,con);                  //Pagina de las consolas
routerInicio.get('/admin' ,admin);                  //Pagina del admin
//routerInicio.post('/SignIn' ,signIn);       //registro usuario
export default routerInicio;