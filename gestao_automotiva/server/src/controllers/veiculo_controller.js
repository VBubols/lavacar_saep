import { Veiculo, Proprietario } from '../models/index.js';

export const listar_veiculos = async => (req, res) {
    try {
        const veiculos = await Veiculo.findAll({
            include: [{
                model: Proprietario,
                as: 'proprietario',
                attributes: ['id', 'nome']
            }],
            order: [['modelo', 'ASC']]
        });

        return res.status(200).json(veiculos);
    } catch (error) {
        console.log(`ERRO: ${error}`);
        return res.status(500).json({ mensagem: `Erro ao listar veiculos.` });
    }
};

export const cadastrar_veiculo = async (req, res) => {
    try {
        const { marca, modelo, placa, ano, cor , proprietarioId } = req.body;

        const veiculo = await Veiculo.create({
            marca,
            modelo,
            placa,
            ano,
            cor,
            proprietarioId
        });

        return res.status(201).json(veiculo);
    } catch (error) {
        console.log(`ERRO: ${error}`);
        return res.status(400).json({ mensagem: `Não foi possível cadastrar o veículo.` });
    }
}