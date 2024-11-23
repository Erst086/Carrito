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
        type: DataTypes.STRING(50), // varchar(50)
        allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true, // Campo permite NULL
        references: {
            model: Categoria,
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
            model: Plataforma,
            key: 'id_plataforma',
        },
    },
}, {
    timestamps: false, // La tabla no tiene columnas de timestamps
});

Categoria.hasMany(Producto, { foreignKey: 'id_categoria' });
Producto.belongsTo(Categoria, { foreignKey: 'id_categoria' });

Plataforma.hasMany(Producto, { foreignKey: 'id_plataforma' });
Producto.belongsTo(Plataforma, { foreignKey: 'id_plataforma' });

export default Producto;
