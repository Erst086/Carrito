import Usuario from "../../models/Usuario.js";
import {check, validationResult} from 'express-validator';
import {Op} from 'sequelize'

const signInRes= (req, res)=>{
    res.render('user/inicioUser');
    return res.render("user/inicioUser",{
        pagina: "user",
    });
}
export{
    signInRes
}