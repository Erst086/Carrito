//renderiza el formulario de inicio de sesion
const inicio = (req, res) => {
    console.log(req.session);
    res.render("admin/inicioAdministrador", {
        csrf: req.csrfToken(),
    });
};

export {inicio};