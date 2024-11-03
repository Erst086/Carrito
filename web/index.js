import express from "express";
import session from "express-session";
import routerInicio from "./routes/inicioRouter.js"
//import routerLogIn from "./routes/logInRouter.js";
//import inicio from "./routes/signInRouter.js";
//import routerUser from "./routes/userRouter.js";
//import routerAdmin from "./routes/adminRouter.js";
import db from "./config/db.js";
//crea la aplicacion
const app = express();
//variables session
app.use(session({secret:'secreto', resave: false, saveUninitialized: false}));
//accesos a los datos de los formularios
app.use(express.urlencoded({extended : true}));
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
//definir puerto 
const port = 2800;
app.listen(port, ()=>{
    console.log(`Esperando peticiones en el puerto ${port}`);
});