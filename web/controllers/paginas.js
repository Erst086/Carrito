import Usuario from "../models/Usuario.js";
import {check, validationResult} from 'express-validator';
import {Op} from 'sequelize'

const inicio = (req, res)=>{
    res.render("inicio",{
        pagina: "Bienvenido",
    });
}

const xbox = (req, res)=>{
    res.render('layout/bXbox',{
        pagina: "Inico xbox",
    });
}

const log = (req, res)=>{
    res.render('credenciales/login' ,{
        pagina: "Inico xbox",
    });
}

const sing = (req, res)=>{
    res.render('credenciales/signin' ,{
        pagina: "Inico xbox",
    });
}

const play = (req, res)=>{
    res.render('layout/bPlay',{
        pagina: "Inico play station",
    });
}

const nin = (req, res)=>{
    res.render('layout/bNin',{
        pagina: "Inico nintendo",
    });
}
const con = (req, res)=>{
    res.render('layout/bConsolas', {
        pagina: "Inico consolas",
    });
}
export{
    xbox,play,nin,con,log,sing,inicio
}