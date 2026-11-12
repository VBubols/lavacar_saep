import { Usuario } from '../models/index.js';
import bcrypt from 'bcrypt';

export const cadastrar = async (req, res) => {
  try {
    const { nome, email, senha, perfil } = req.body;

    const senha_hash = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
      nome,
      email,
      senha: senha_hash,
      perfil,
    });

    return res.status(201).json({
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        perfil: usuario.perfil,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
};
