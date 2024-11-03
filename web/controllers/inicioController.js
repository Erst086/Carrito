const inicio = (req, res)=>{
    res.render('inicio');
    req.session.nombreSesion = nombre;
    return res.render("inicio",{
        pagina: "Bienvenido",
        inicio: "Inicio",
        nmbr: req.session.nombreSesion,
    });
}
export{
    inicio
}