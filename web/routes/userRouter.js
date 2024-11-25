import express from "express";
import { inicio } from "../controllers/userOps/userController.js";

const routerUser = express.Router();

routerUser.get('/', inicio);                  //Pagina de inicio para usuario

export default routerUser;