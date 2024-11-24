import Usuarios from "../../models/Usuario.js"
import {check, validationResult} from 'express-validator';
import {idGenera, JWTGenera} from '../../helpers/tokens.js'
import {Op, Sequelize} from 'sequelize'
import {mailRegistro} from '../../helpers/mails.js'
//import dotenv from 'dotenv';
//import csrf from "csurf";

const inicioSesion = (req, res) => {
    res.render("credenciales/login", {
        csrf: req.csrfToken(),
    });
};
const signLink = (req,res) =>{
    res.render("credenciales/signin",{
        csrf: req.csrfToken(),
    });
};
const signIn = async (req, res) => {
    let valido = await validacionFormulario(req);
    if (!valido.isEmpty()) {
        return res.render("credenciales/signin", {
            csrf: req.csrfToken(),
            errores: valido.array(),
        });
    }
    const user = await Usuarios.create({
    nombre: req.body.nombre,
    ap_paterno: req.body.apPater,
    ap_materno: req.body.apMater,
    correo:req.body.correo,
    contrasenia: req.body.password,
    id_rol:2,
    token:idGenera()
    });
    await user.save();
    //manda correo
    mailRegistro({
        nombre: user.nombre,
        correo: user.correo,
        token: user.token,
    })
    //mostrar mensaje de confirmacions
    res.render("credenciales/confirmacion", {
        pagina: "Usuario se registro exitosamente",
        mensaje: "Revise su correo electronico para confirmar el registro",
        csrf: req.csrfToken(),
    });
};
const confirmacionRegistro = async (req, res) => {
    const {token} =req.params;
    //token valido
    const user=await Usuarios.findOne({
        where:{token}
    });
    if(!user){
        res.render("credenciales/confirmacion", {
            pagina: "No se pudo confirmar tu cuenta",
            mensaje:"Lo lamentamos no se pudo confirmar la cuenta intentalo de nuevo"
        });
    }
    //confirmar la cuenta del usuario
    user.token=null;
    user.confirmar=true;
    await user.save();
    res.render("credenciales/confirmacion", {
        pagina: "Confirmacion exitosa",
        mensaje:"El registro se termino exitosamente puede comenzar a hacer uso de su cuenta",
    });
}
const logIn = async (req, res) => {
    let valido = await validacionFormularioInicio(req);
    if (!valido.isEmpty()) {
        return res.render("credenciales/login", {
            csrf:req.csrfToken(),
            errores: valido.array(),
        });
    }
    //comprobar si el usuario existe
    const{correo,password}=req.body
    const user=await Usuarios.findOne({where:{correo}})
    if(!user){
        return res.render("credenciales/login", {
            csrf:req.csrfToken(),
            errores: [{msg:'El usuario no existe'}]
        });
    }
    //comprobar si el usuario esta confirmado
    if(!user.confirmar){
        return res.render("credenciales/login", {
            csrf:req.csrfToken(),
            errores: [{msg:'Tu cuenta no tiene confirmación, revisa tu correo'}]
        });
    }
    //comprobando el password
    if(!user.verificandoClave(password)){
        return res.render("credenciales/login", {
            csrf:req.csrfToken(),
            errores: [{msg:'Credenciales no validas'}]
        });
    }
    //se actualiza el ultimo acceso
    user.ultimo_acceso = new Date(); // Asigna la fecha y hora actual
    await user.save();
    //JWT
    const token=JWTGenera(user);
    console.log(user);
    console.log(token);
    //crean jsonwebtoken
    return res.cookie('_token',token,{
    httpOnly:true,
    //maxAge:60*1000
    //secure:true
    }).redirect('/');
};
async function validacionFormularioInicio(req) {
    await check("correo")
    .notEmpty()
    .withMessage("El correo no debe ser vacio")
    .run(req);
    await check("password")
    .notEmpty()
    .withMessage("Clave no debe ser vacio")
    .run(req);
    let salida = validationResult(req);
    return salida;
};
async function validacionFormulario(req) {
    await check("nombre")
    .notEmpty()
    .withMessage("Usuario no debe ser vacio")
    .run(req);
    await check("apPater")
    .notEmpty()
    .withMessage("Apellido paterno no debe ser vacio")
    .run(req);
    await check("apMater")
    .notEmpty()
    .withMessage("Apellido materno no debe ser vacio")
    .run(req);
    await check("password")
    .notEmpty()
    .withMessage("Contrasena no debe ser vacio")
    .run(req);
    await check("correo")
    .notEmpty()
    .withMessage("Correo no debe ser vacio")
    .run(req);
    let salida = validationResult(req);
    return salida;
};
export {inicioSesion, signLink, signIn, confirmacionRegistro, logIn};