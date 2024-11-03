import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Usuario from './Usuario.js';
import DatosPago from './DatosPago.js';

const Venta = db.define('ventas', {
    id_venta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
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

Usuario.hasMany(Venta, { foreignKey: 'id_usuario' });
Venta.belongsTo(Usuario, { foreignKey: 'id_usuario' });

DatosPago.hasMany(Venta, { foreignKey: 'id_datopago' });
Venta.belongsTo(DatosPago, { foreignKey: 'id_datopago' });

export default Venta;