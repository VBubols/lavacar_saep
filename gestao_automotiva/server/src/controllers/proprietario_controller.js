import { Proprietario } from '../models/index.js';

export const listar_proprietarios = async (req, res) => {
  try {
    const proprietarios = await Proprietario.findAll({
      attributes: {
        exclude: ['cpf'],
      },
      order: [['nome', 'ASC']],
    });

    return res.status(200).json(proprietarios);
  } catch (error) {
    console.log(`ERRO: ${error}`);
    return res.status(500).json({ mensagem: `Erro ao listar proprietarios.` });
  }
};

export const criar_proprietario = async (req, res) => {
  try {
    const { nome, email, telefone, cpf } = req.body;

    const proprietario = await Proprietario.create({
      nome,
      email,
      telefone,
      cpf,
    });

    return res.status(201).json({
      id: proprietario.id,
      nome: proprietario.nome,
      email: proprietario.email,
      telefone: proprietario.telefone,
    });
  } catch (error) {
    console.log(`ERRO: ${error}`);
    return res.status(400).json({
      mensagem: `Não foi possível cadastrarar o proprietário: ${error}`,
    });
  }
};
