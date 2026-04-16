const express = require('express');
const router = express.Router();
const animaisRoutes = require('./animais.route');
const tutoresRoutes = require('./tutores.route'); 
const {autenticar, validarContentType} = require('../middlewares/main.middleware')
// 1. Rotas de Recursos (Coloque SEMPRE antes do 404)
router.use('/animais', animaisRoutes);
router.use('/tutores', tutoresRoutes);

// 2. Rota Raiz
router.get('/', (req, res) => {
  res.json({ sistema: 'clinica veterinaria', status: 'Online' });
});

// router.use(autenticar)
// 3. Rota 404 (A última linha deste arquivo)
router.use((req, res) => {
  res
    .status(404)
    .json({ erro: 'Rota não encontrada na Clinica Veterinaria.' });
});

module.exports = router;
