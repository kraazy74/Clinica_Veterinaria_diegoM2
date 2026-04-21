const consultasService = require('../services/consultas.service');

// GET /animais — Lista todos os animais
const listarConsulatas = async (req, res) => {
  try {
    const consultas = await consultasService.listarTodasConsultas();
    res.status(200).json({ total: consultas.length, consultas });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar consultas.' });
  }
};

// GET /animais/:id — Busca animal por ID
async function buscarConsultaPorId(req, res) {
    try {
        // Extrai o parâmetro da URL — essa é a responsabilidade do Controller
        const { id } = req.params;
        const consulta = await consultaService.buscarConsultaPorId(id);

        // Se o Service retornou null, o animal não existe
        if (!consulta) {
            return res
                .status(404)
                .json({ erro: `Consulta ${id} não encontrado na tabela.` });
        }

        res.status(200).json({ consulta });
    } catch (erro) {
        res.status(500).json({ erro: 'Erro interno ao buscar consulta.' });
    }
}

// POST /animais — Cadastra novo animal
const criarAnimal = async (req, res) => {
  try {
    // Extrai os dados do corpo da requisição
    const { nome, especie } = req.body;
    const novoAnimal = await AnimaisService.criarConsulta({ nome, animal });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'consulta cadastrada com sucesso!',
      animal: novoAnimal,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};

module.exports = { listarConsulatas, buscarConsultaPorId criarConsulta };
