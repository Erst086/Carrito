import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Usuarios from './Usuario.js';
import DatosPago from './DatosPago.js';

const Ventas = db.define('ventas', {
    id_venta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuarios,
            key: 'id_usuario',
        },
    },
    id_datopago: {
        type: DataTypes.INTEGER,
        references: {
            model: DatosPago,
            key: 'id_datopago',
        },
    },
    fecha_venta: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    total_venta: {
        type: DataTypes.DECIMAL(10, 2),
    },
}, {
    timestamps: false,
});

Usuarios.hasMany(Ventas, { foreignKey: 'id_usuario' });
Ventas.belongsTo(Usuarios, { foreignKey: 'id_usuario' });

DatosPago.hasMany(Ventas, { foreignKey: 'id_datopago' });
Ventas.belongsTo(DatosPago, { foreignKey: 'id_datopago' });

export default Ventas;