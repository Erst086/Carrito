import express from "express";
import { inicio , logInLink , signInLink, logIn , signIn , back } from "../controllers/inicioController.js";
import { xbox , play , nin , con } from "../controllers/paginas.js";
import {logInRes} from "../controllers/gestionUsuarios/logInController.js"
import {signInRes} from "../controllers/gestionUsuarios/signInController.js"

const routerInicio = express.Router();
//routing
routerInicio.get('/', inicio);              //Pagina de inicio

routerInicio.get('/logIn' ,logInLink);          //Pagina de Log In
routerInicio.get('/signIn' ,signInLink);        //Pagina de Sign In
routerInicio.get('/back' ,back);                //Regreso a inicio
routerInicio.get('/xbox' ,xbox);                //Pagina de xbox
routerInicio.get('/play' ,play);                //Pagina de xbox
routerInicio.get('/nin' ,nin);                  //Pagina de xbox
routerInicio.get('/con' ,con);                  //Pagina de las consolas

routerInicio.post('/inicio' ,logInRes);         //inicio usuario o inicio admin
routerInicio.post('/inicio' ,signInRes);         //registro
//routerInicio.post('/SignIn' ,signIn);       //registro usuario
export default routerInicio;