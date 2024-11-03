import express from "express";
import { inicio , logIn, signIn , logInLink ,signInLink } from "../controllers/inicioController.js";

const router_inicio = express.Router();
//routing
router_inicio.get('/', inicio);
router_inicio.get('/LogIn' ,logInLink);
router_inicio.get('/SignIn' ,signInLink);
router_inicio.post('/LogIn' ,logIn);
router_inicio.post('/SignIn' ,signIn);

export default router_inicio;
