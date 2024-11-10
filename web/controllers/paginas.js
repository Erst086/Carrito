import Usuario from "../models/Usuario.js";
import {check, validationResult} from 'express-validator';
import {Op} from 'sequelize'

const xbox = (req, res)=>{
    res.render('xbox');
    return res.render("xbox",{
        pagina: "Inico xbox",
    });
}

const logIn = (req, res)=>{
    res.render('/user/inicioUser');
    return res.render('/user/inicioUser',{
        pagina: "Inicio User",
    });
}


export{
    xbox
}