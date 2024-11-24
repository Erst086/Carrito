import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Categorias from './Categoria.js';
import Plataformas from './Plataforma.js';

const Productos = db.define('productos', {
    id_producto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING(50), // varchar(50)
        allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true, // Campo permite NULL
        references: {
            model: Categorias,
            key: 'id_categoria',
        },
    },
    costo: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    imagen: {
        type: DataTypes.BLOB('long'), // longblob
        allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_plataforma: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Plataformas,
            key: 'id_plataforma',
        },
    },
}, {
    timestamps: false, // La tabla no tiene columnas de timestamps
});

Categorias.hasMany(Productos, { foreignKey: 'id_categoria' });
Productos.belongsTo(Categorias, { foreignKey: 'id_categoria' });

Plataformas.hasMany(Productos, { foreignKey: 'id_plataforma' });
Productos.belongsTo(Plataformas, { foreignKey: 'id_plataforma' });

export default Productos;
