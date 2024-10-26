SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS carrito;
CREATE DATABASE IF NOT EXISTS carrito DEFAULT CHARACTER SET UTF8MB4;
USE carrito;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios(
    id_usuario					INTEGER NOT NULL AUTO_INCREMENT,
    nombre						VARCHAR(100) NOT NULL,
    ap_paterno					VARCHAR(80) NOT NULL,
    ap_materno					VARCHAR(80) NOT NULL,
    correo  					VARCHAR(250) NOT NULL,
    contrasenia					VARCHAR(50) NOT NULL,
    fecha_registro				DATETIME DEFAULT NOW(),
    ultimo_acceso				DATETIME,
    id_rol				        INTEGER NOT NULL,
    PRIMARY KEY(id_usuario),
    FOREIGN KEY(id_rol) REFERENCES roles(id_rol)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS roles;
CREATE TABLE IF NOT EXISTS roles(
    id_roles    				INTEGER NOT NULL AUTO_INCREMENT,
    nombre						VARCHAR(50) NOT NULL,
    descripcion                 TEXT,
    PRIMARY KEY(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS datos_pago;
CREATE TABLE IF NOT EXISTS datos_pago(
    id_datopago					INTEGER NOT NULL AUTO_INCREMENT,
    id_usuario					INTEGER NOT NULL,
    numero_tarjeta				VARCHAR(16) NOT NULL,
    cvv     					VARCHAR(3) NOT NULL,
    fecha_vencimiento  			DATE NOT NULL,
    beneficiario		        VARCHAR(250) NOT NULL,
    PRIMARY KEY(id_datopago),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS ventas;
CREATE TABLE IF NOT EXISTS ventas(
    id_venta					INTEGER NOT NULL AUTO_INCREMENT,
    id_usuario  				INTEGER,
    id_datopago                 INTEGER,
    fecha_venta                 DATETIME DEFAULT NOW(),
    total_venta                 DECIMAL(10, 2),
    PRIMARY KEY(id_venta),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
    FOREIGN KEY(id_datopago) REFERENCES datos_pago(id_datopago)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS productos_venta;
CREATE TABLE IF NOT EXISTS productos_venta(
    id_productventa 			INTEGER NOT NULL AUTO_INCREMENT,
    id_venta      				INTEGER,
    id_producto    				INTEGER,
    cantidad                    INTEGER,
    precio_unidad               DECIMAL(10, 2),
    subtotal                    DECIMAL(10, 2),
    PRIMARY KEY(id_jv),
    FOREIGN KEY(id_venta) REFERENCES ventas(id_venta),
    FOREIGN KEY(id_producto) REFERENCES productos(id_producto)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS productos;
CREATE TABLE IF NOT EXISTS productos(
    id_producto					INTEGER NOT NULL AUTO_INCREMENT,
    nombre						VARCHAR(50) NOT NULL,
    id_categoria                INTEGER,
    costo                       DECIMAL(10, 2),
    precio                      DECIMAL(10, 2),
    descripcion                 TEXT,
    imagen                      LONGBLOB,
    stock                       INTEGER,
    id_plataforma  				INTEGER,
    PRIMARY KEY(id_juego),
    FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria)
    FOREIGN KEY(id_plataforma) REFERENCES plataformas(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS categorias;
CREATE TABLE IF NOT EXISTS categorias(
    id_categoria				INTEGER NOT NULL AUTO_INCREMENT,
    nombre						VARCHAR(50) NOT NULL,
    descripcion                 TEXT,
    PRIMARY KEY(id_categoria)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS plataformas;
CREATE TABLE IF NOT EXISTS plataformas(
    id_plataforma				INTEGER NOT NULL AUTO_INCREMENT,
    nombre						VARCHAR(50) NOT NULL,
    imagen                      LONGBLOB,
    PRIMARY KEY(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

/*
    INSERT INTO plataformas(nombre,imagen) values ('Nintendo', LOAD_FILE('ruta'));
    INSERT INTO plataformas(nombre,imagen) values ('PlayStation', LOAD_FILE('ruta'));
    INSERT INTO plataformas(nombre,imagen) values ('XBox', LOAD_FILE('ruta'));
*/
