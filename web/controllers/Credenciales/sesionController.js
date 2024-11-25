import Usuarios from "../../models/Usuario.js"
import {check, validationResult} from 'express-validator';
import {idGenera, JWTGenera} from '../../helpers/tokens.js'
import {mailRegistro} from '../../helpers/mails.js'
//renderiza el formulario de inicio de sesion
const inicioSesion = (req, res) => {
    res.render("credenciales/login", {
        csrf: req.csrfToken(),
    });
};
//enlace a pagina de registro
const signLink = (req,res) =>{
    res.render("credenciales/signin",{
        csrf: req.csrfToken(),
    });
};
//registro de usuraios
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
        mensaje: "Revice su correo electronico para confirmar el registro",
        csrf: req.csrfToken(),
    });
};
//se confirma el registro del usuario
const confirmacionRegistro = async (req, res) => {
    const {token} =req.params;
    //token valido
    const user=await Usuarios.findOne({
        where:{token}
    });
    if(!user){
        res.render("credenciales/confirmacion", {
            pagina: "No se pudo confirmar tu cuenta",
            mensaje:"Lo lamentamos no se pudo confvalidacionFormularioInicioirmar la cuenta intentalo de nuevo"
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
//Operacion al iniciar sesion
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
    // Guardar datos del usuario en la sesión
    req.session.usuario = {
        id: user.id_usuario,
        nombre: user.nombre,
        correo: user.correo,
        rol: user.id_rol
    };
    //JWT
    const token=JWTGenera(user);
    //crean jsonwebtoken
    if (user.id_rol === 1) {
        return res.cookie('_token', token, {
            httpOnly: true,
        }).redirect('/admin/'); // Redirige al inicio del administrador
    } else if (user.id_rol === 2) {
        return res.cookie('_token', token, {
            httpOnly: true,
        }).redirect('/user/'); // Redirige al inicio del usuario
    } else {
        // Manejar otros roles o un caso inesperado
        return res.render("error", {
            mensaje: "Rol no reconocido. Por favor, contacte con el administrador."
        });
    }
};
//Operacion de cerrar sesion
const logOut = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            return res.redirect('/');
        }
        res.clearCookie('connect.sid'); // Limpia la cookie de sesión
        res.redirect('/');
    });
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
export {inicioSesion, signLink, signIn, confirmacionRegistro, logIn, logOut};