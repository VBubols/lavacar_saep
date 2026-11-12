import { Usuario } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({
      where: { email },
    });

    const senha_valida = await bcrypt.compare(senha, usuario.senha);

    if (!usuario || !senha_valida) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas.' });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        perfil: usuario.perfil,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30m',
      },
    );

    return res.json({
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        perfil: usuario.perfil,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};
