const consultas = [
  {
    id:1 ,
    nome_paciente: 'asdsadwjkl',
    grau: 'leve',
    motivo: 'exame de rotina',
    data: '2020-01-01',
    tutor_id: 1
  },
  {
    id: 2,
    nome: 'asdfghjkl',
    especie: 'cachorro',
    raca: 'Labrador',
    data_nascimento: '2020-01-01',
    tutor_id: 1
  },
  {
    id: 3,
    nome: 'afl',
    especie: 'cachorro',
    raca: 'Labrador',
    data_nascimento: '2020-01-01',
    tutor_id: 1
  }
];

// Lista todos os animais do acervo
const listarTodosAnimais = async () => {
  return acervo;
};

// Busca um animal específico pelo ID
const buscarAnimalPorId = async (id) => {
  const animais = acervo.find((l) => l.id === Number(id));
  // Regra de negócio: se não existe, retorna null.
  // O Controller decide o que fazer com o null.
  return animais || null;
};

// Criar um novo animal no acervo
const criarAnimal = async ({ nome, especie, raca, data_nascimento, tutor_id }) => {
  // Regra de negócio: nome, especie, raca, data_nascimento e tutor_id são obrigatórios
  if (!nome || !especie || !raca || !data_nascimento || !tutor_id) {
    throw new Error('Todos os campos são obrigatórios.');
  }
  const novoAnimal = {
    id: acervo.length + 1,
    nome,
    especie,
    raca,
    data_nascimento,
    tutor_id
  };
  acervo.push(novoLivro);
  return novoLivro;
};

module.exports = { listarTodosAnimais, buscarAnimalPorId, criarAnimal };