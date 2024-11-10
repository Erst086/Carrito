import Usuario from "../models/Usuario.js";
import {check, validationResult} from 'express-validator';
import {Op} from 'sequelize'

const xbox = (req, res)=>{
    res.render('xbox');
    return res.render("xbox",{
        pagina: "Inico xbox",
    });
}

const play = (req, res)=>{
    res.render('play');
    return res.render("play",{
        pagina: "Inico play station",
    });
}

const nin = (req, res)=>{
    res.render('nin');
    return res.render("nin",{
        pagina: "Inico nintendo",
    });
}

export{
    xbox,play,nin
}