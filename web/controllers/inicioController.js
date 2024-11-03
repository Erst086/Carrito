import Usuario from "../models/Usuario.js";
import {check, validationResult} from 'express-validator';
import {Op} from 'sequelize'

const inicio = (req, res)=>{
    res.render('inicio');
    return res.render("inicio",{
        pagina: "Bienvenido",
    });
}
const logInLink = (req, res)=>{
    res.render('login');
    return res.render("login",{
        pagina: "login",
    });
}
const signInLink = (req, res)=>{
    res.render('signin');
    return res.render("signin",{
        pagina: "signin",
    });
}
const logIn = (req, res)=>{
    res.render('/user/inicioUser');
    return res.render('/user/inicioUser',{
        pagina: "Inicio User",
    });
}
const signIn = (req, res)=>{
    res.render('/user/inicioUser');
    return res.render('/user/inicioUser',{
        pagina: "Inicio User",
    });
}
const back = (req, res)=>{
    res.render('inicio');
    return res.render("inicio",{
        pagina: "Bienvenido",
    });
}

export{
    inicio , logInLink , signInLink, logIn , signIn , back
}