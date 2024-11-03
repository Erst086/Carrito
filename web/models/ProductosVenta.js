import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Venta from './Venta.js';
import Producto from './Producto.js';

const ProductoVenta = db.define('productos_venta', {
    id_productventa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_venta: {
        type: DataTypes.INTEGER,
        references: {
            model: Venta,
            key: 'id_venta',
        },
    },
    id_producto: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'id_producto',
        },
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio_unidad: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    timestamps: false,
});

Venta.hasMany(ProductoVenta, { foreignKey: 'id_venta' });
ProductoVenta.belongsTo(Venta, { foreignKey: 'id_venta' });

Producto.hasMany(ProductoVenta, { foreignKey: 'id_producto' });
ProductoVenta.belongsTo(Producto, { foreignKey: 'id_producto' });

export default ProductoVenta;