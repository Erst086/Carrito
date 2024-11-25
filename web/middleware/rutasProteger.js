import jwt from "jsonwebtoken"
import Usuarios from "../models/Usuario.js";

const rutaProteger=async(req,res,next)=>{
    //verificar si tiene un token
    const {_token}=req.cookies;
    if(!_token){
        return res.redirect('/');
    }
    //Verificar si es el token que se espera
    try{
        const decoded=jwt.verify(_token,process.env.SC_JWT)
        const usuario=await Usuarios.scope("elimiarClave").findByPk(decoded.id)
        //almacenar el usuario req
        if(usuario){
        req.usuario=usuario
        }else{
        return res.redirect("/")
        }
        return next()
    }catch(error){
        return res.clearCookie('_token').redirect('/');
    }
    next();
};
export default rutaProteger;