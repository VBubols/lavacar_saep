import { Ordem_Servico, Veiculo, Proprietario } from '../models/index.js';

export const criar_ordem = async (req, res) => {
  try {
    const { descricao, tipoServico, valor, veiculoId } = req.body;

    const ordem = await Ordem_Servico.create({
      descricao,
      tipoServico,
      valor,
      veiculoId,
    });

    return res.status(201).json(ordem);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ mensagem: 'Não foi possível criar ordem de serviço.' });
  }
};

export const listar_ordem = async (req, res) => {
  try {
    const ordens = await Ordem_Servico.findAll({
      include: [
        {
          model: Veiculo,
          as: 'veiculo',
          include: [
            {
              model: Proprietario,
              as: 'proprietario',
              attributes: ['id', 'nome'],
            },
          ],
        },
      ],
      order: [['dataEntrada', 'DESC']],
    });

    return res.status(200).json(ordens);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ mensagem: 'Erro ao listar ordens de serviço' });
  }
};

export const atualizarStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const ordem = await Ordem_Servico.findByPk(id);

    if (!ordem) {
      res.status(404).json({ mensagem: 'Ordem de serviço não encontrada' });
    }

    await ordem.update({ status });

    return res.status(200).json(ordem);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ mensagem: 'Não foi possível atualizar o status' });
  }
};
