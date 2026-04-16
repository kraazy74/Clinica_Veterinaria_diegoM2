const tutoresService = require('../services/tutores.service');

// GET /tutores
const listarTutores = async (req, res) => {
  try {
    const tutores = await tutoresService.listarTodosTutores();
    res.status(200).json({ total: tutores.length, tutores });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar tutores.' });
  }
};

// POST /tutores — Cadastra novo tutor
const criarTutor = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const novoTutor = await tutoresService.criarTutor({ nome, email });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'Tutor cadastrado com sucesso!',
      tutor: novoTutor,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarTutores, criarTutor };
