const express = require('express');
const router = express.Router();
const tutoresController = require('../controllers/usuario.controller');

router.get('/', tutoresController.listarTutores);
router.post('/', tutoresController.criarTutor);

module.exports = router;
