import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config({path:'.env'});

const mailRegistro = async (info) =>{
    const transport = nodemailer.createTransport({
        host: process.env.CORREO_HOST,
        port: process.env.CORREO_PORT,
        auth:{
            user: process.env.CORREO_USER,
            pass: process.env.CORREO_PASS,
        },
    });
    const {nombre, correo, token} = info;
    await transport.sendMail({
            from: 'joseplascencia346@aragon.unam.mx',
            to: correo,
            subject: 'Registro',
            html:`
                <p> ¿Como estás ${nombre}? Para terminar tu registro en nuestra plataforma es necesario confirmar tu registro</p>
                <p> Confirma dando click en el siguiente enlace:
                    <a href="${process.env.URL_BACKEND}:${process.env.PORTBACKEND ?? 2800}/confirmacion/${token}">
                    Confirmar </a>
                </p>
                <p>Si no solisitaste el registro, por favor ignora el mensaje</p>
                
            `,
    })
}
export  {mailRegistro};