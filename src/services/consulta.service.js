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
    id:w ,
    nome_paciente: 'adsal',
    grau: 'leve',
    motivo: 'exame pos-operatorio',
    data: '2020-01-01',
    tutor_id: 2
  },
  {
    id:3,
    nome_paciente: 'asdsddsal',
    grau: 'grave',
    motivo: 'operaçao relampago',
    data: '2020-01-01',
    tutor_id: 3
  }
];

// Lista todos os animais do acervo
const listarTodasConsultas= async () => {
  return consultas;
};

// Busca um animal específico pelo ID
const buscarConsultaPorId = async (id) => {
  const consulta = consulta.find((l) => l.id === Number(id));
  // Regra de negócio: se não existe, retorna null.
  // O Controller decide o que fazer com o null.
  return consultas || null;
};

// Criar um novo animal no acervo
const criarConsulta = async ({ nome_paciente, grau, motivo, data, tutor_id }) => {
  // Regra de negócio: nome, especie, raca, data_nascimento e tutor_id são obrigatórios
  if (!nome_paciente || !grau || !motivo || !data || !tutor_id) {
    throw new Error('Todos os campos são obrigatórios.');
  }
  const novaConsulta = {
    id: consultas.length + 1,
    nome_paciente,
    grau,
    motivo,
    data,
    tutor_id
  };
  consultas.push(novaConsulta);
  return novaConsulta;
};

module.exports = { listarTodasConsultas, buscarConsultaPorId, criarConsulta };