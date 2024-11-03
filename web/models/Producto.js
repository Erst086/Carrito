import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Categoria from './Categoria.js';
import Plataforma from './Plataforma.js';

const Producto = db.define('productos', {
    id_producto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id_categoria',
        },
    },
    costo: {
        type: DataTypes.DECIMAL(10, 2),
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    imagen: {
        type: DataTypes.BLOB("long"),
    },
    stock: {
        type: DataTypes.INTEGER,
    },
    id_plataforma: {
        type: DataTypes.INTEGER,
        references: {
            model: Plataforma,
            key: 'id_plataforma',
        },
    },
}, {
    timestamps: false,
});

Categoria.hasMany(Producto, { foreignKey: 'id_categoria' });
Producto.belongsTo(Categoria, { foreignKey: 'id_categoria' });

Plataforma.hasMany(Producto, { foreignKey: 'id_plataforma' });
Producto.belongsTo(Plataforma, { foreignKey: 'id_plataforma' });

export default Producto;