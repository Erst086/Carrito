import express from "express";
import { inicio } from "../controllers/inicioController.js";

const router_inicio = express.Router();
//routing
router_inicio.get('/', inicio)
export default router_inicio;
