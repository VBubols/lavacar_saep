import { Usuario } from './usuario.js';
import { Proprietario } from './proprietario.js';
import { Veiculo } from './veiculo.js';
import { Ordem_Servico } from './ordem_servico.js';

//Proprietario possui varios veiculos
Proprietario.hasMany(Veiculo, {
    foreignKey: 'proprietarioId',
    as: 'veiculos'
});

Veiculo.belongsTo(Proprietario, {
    foreignKey: 'proprietarioId',
    as: 'proprietario'
});

//Veiculo possui varias ordens de servico
Veiculo.hasMany(Ordem_Servico, {
    foreignKey: 'veiculoId',
    as: 'veiculo'
});

Ordem_Servico.belongsTo(Veiculo, {
    foreignKey: 'veiculoId',
    as: 'veiculo'
});

export {
    Usuario,
    Proprietario,
    Veiculo,
    Ordem_Servico
};