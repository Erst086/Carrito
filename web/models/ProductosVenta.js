import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Ventas from './Venta.js';
import Productos from './Producto.js';

const ProductoVenta = db.define('productos_ventas', {
    id_productventa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_venta: {
        type: DataTypes.INTEGER,
        references: {
            model: Ventas,
            key: 'id_venta',
        },
    },
    id_producto: {
        type: DataTypes.INTEGER,
        references: {
            model: Productos,
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

Ventas.hasMany(ProductoVenta, { foreignKey: 'id_venta' });
ProductoVenta.belongsTo(Ventas, { foreignKey: 'id_venta' });

Productos.hasMany(ProductoVenta, { foreignKey: 'id_producto' });
ProductoVenta.belongsTo(Productos, { foreignKey: 'id_producto' });

export default ProductoVenta;