const tutores = [
  {
    id: 1,
    nome: 'Anderson Dutra',
    email: 'anderson@gmail.com',
  },
  {
    id: 2,
    nome: 'Ralph Dutra',
    email: 'ralph@gmail.com',
  },
  {
    id: 3,
    nome: 'Teddy Dutra',
    email: 'teddy@gmail.com',
  },
];

// Lista todos os tutores
const listarTodosTutores = async () => {
  return tutores;
};

// Criar um novo tutor
const criarTutor = async ({ nome, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novoTutor = {
    id: tutores.length + 1,
    nome,
    email,
  };
  tutores.push(novoTutor);
  return novoTutor;
};

module.exports = { listarTodosTutores, criarTutor };
