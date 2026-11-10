import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Ordem_Servico = sequelize.define(
    'Ordem_Servico',
    {
        dataEntrada: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        descricao:   { type: DataTypes.STRING(255), allowNull: false },
        tipoServico: { type: DataTypes.STRING(100), allowNull: false },
        valor:       { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0, validate: { min: 0 } },
        status:      { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 'aberto', validate: { isIn: [['aberto', 'em_andamento', 'concluido', 'cancelado']] } }
    },
    {
        tabeName: 'ordens_servico',
        timestamps: true
    }
);