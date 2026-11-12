import { Router } from 'express';
import { autenticar } from '../middlewares/auth.js';
import { login } from '../controllers/usuario.controller.js';
import { cadastrar } from '../controllers/auth.controller.js';

import {
  listar_proprietarios,
  criar_proprietario,
} from '../controllers/proprietario.controller.js';

import {
  listar_veiculos,
  cadastrar_veiculo,
} from '../controllers/veiculo.controller.js';

import {
  listar_ordem,
  criar_ordem,
  atualizar_status,
} from '../controllers/ordem_servico.controller.js';

const router = Router();

// Autenticação
router.post('/auth/cadastrar', cadastrar);

// Login
router.post('/auth/login', login);

// Proprietários
router.get('/proprietarios', autenticar, listar_proprietarios);
router.post('/proprietarios', autenticar, criar_proprietario);

// Veículos
router.get('/veiculos', autenticar, listar_veiculos);
router.post('/veiculos', autenticar, cadastrar_veiculo);

// Ordens de serviço
router.get('/ordens-servico', autenticar, listar_ordem);
router.post('/ordens-servico', autenticar, criar_ordem);

router.patch('/ordens-servico/:id/status', autenticar, atualizar_status);

export default router;
