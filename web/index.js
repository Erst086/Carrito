//recursos
import express from "express";
import session from "express-session";
import csrf from "csurf";
import cookieParser from "cookie-parser";
//routers
import routerInicio from "./routes/inicioRouter.js"
import productoRoutes from './routes/productoRoutes.js'
import usuarioRouter from './routes/usuarioRouter.js';

import db from "./config/db.js";
//crea la aplicacion
const app = express();
//variables session
app.use(session({secret:'secreto', resave: false, saveUninitialized: false}));
//accesos a los datos de los formularios
app.use(express.urlencoded({extended : true}));
app.use(express.json());
//habilitar cookie parser
app.use(cookieParser())
//CSRF, forma global para la aplicación.
app.use(csrf({cookie:true}))
//conectando la base de datos
try{
    await db.authenticate();
    db.sync()
    console.log("Conexion exitossa a BD");
}catch(error){
    console.log(error);
}
//pug 
app.set("view engine", "pug");
app.set("views", "./views");
//carpeta publica
app.use(express.static("public"));



//routing
app.use("/", routerInicio);
app.use('/', productoRoutes);
app.use('/', usuarioRouter);
// stylos crud
app.use('/css', express.static('public/css'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal en el servidor.');
});


//definir puerto 
const port = 2800;
app.listen(port, ()=>{
    console.log(`Esperando peticiones en el puerto ${port}`);
});