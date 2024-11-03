import Usuario from "../../models/Usuario.js";
import {check, validationResult} from 'express-validator';
import {Op} from 'sequelize'

const logInRes= (req, res)=>{
    res.render('admin/inicioAdmin');
    return res.render("admin/inicioAdmin",{
        pagina: "user",
    });
    /*
    res.render('user/inicioUser');
    return res.render("user/inicioUser",{
        pagina: "user",
    });*/
}
export{
    logInRes
}