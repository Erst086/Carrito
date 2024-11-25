//recursos
import express from "express";
import session from "express-session";
import csrf from "csurf";
import cookieParser from "cookie-parser";
//routers
import routerInicio from "./routes/inicioRouter.js";
import routerAdmin from "./routes/adminRouter.js";
import routerUser from "./routes/userRouter.js";
//variables de sesion globales

import sessionMiddleware from "./middleware/sesionsVars.js";
//base de datos
import db from "./config/db.js";
//crea la aplicacion
const app = express();
//variables session
app.use(session({secret:'secreto', resave: false, saveUninitialized: false}));
//middleware para inyectar variables de sesion
app.use(sessionMiddleware);
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
app.use("/admin", routerAdmin);
app.use("/user", routerUser);
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
