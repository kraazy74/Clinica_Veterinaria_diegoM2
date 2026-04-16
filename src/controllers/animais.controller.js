const AnimaisService = require('../services/animais.service');

// GET /animais — Lista todos os animais
const listarAnimais = async (req, res) => {
  try {
    const animais = await AnimaisService.listarTodosAnimais();
    res.status(200).json({ total: animais.length, animais });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar animais.' });
  }
};

// GET /animais/:id — Busca animal por ID
const buscarAnimalPorId = async (req, res) => {
  try {
    // Extrai o parâmetro da URL — essa é a responsabilidade do Controller
    const { id } = req.params;
    const animal = await AnimaisService.buscarAnimalPorId(id);                                  

  // Se o Service retornou null, o animal não existe
    if (!animal) {
      return res
        .status(404)
        .json({ erro: `Animal ${id} não encontrado no acervo.` });
    }

    res.status(200).json({ animal });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar animal.' });
  }
};

// POST /animais — Cadastra novo animal
const criarAnimal = async (req, res) => {
  try {
    // Extrai os dados do corpo da requisição
    const { nome, especie } = req.body;
    const novoAnimal = await AnimaisService.criarAnimal({ nome, especie });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'Animal cadastrado no acervo com sucesso!',
      animal: novoAnimal,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarAnimais, buscarAnimalPorId, criarAnimal };
