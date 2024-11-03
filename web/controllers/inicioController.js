import Usuario from "../models/Usuario.js";
import {check, validationResult} from 'express-validator';
import {Op} from 'sequelize'

const inicio = (req, res)=>{
    res.render('inicio');
    return res.render("inicio",{
        pagina: "Bienvenido",
    });
}
const signInLink = (req, res)=>{
    res.render("signin",{
        pagina: "Sign In"
    });
}
const logInLink = (req, res)=>{
    res.render("login",{
        pagina: "Log In"
    });
}
const logIn = (req, res)=>{
    res.render("inicio",{
        pagina: "se logueo"
    });
}
const signIn = (req, res)=>{
    res.render("inicio",{
        pagina: "se registro"
    });
}
export{
    inicio , logIn , signIn , logInLink ,signInLink
}