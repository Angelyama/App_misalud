const express = require('express');
const { getAllUsuarios, createUsuario } = require('../controllers/usuarioController');
const router = express.Router();

router.get('/', getAllUsuarios);
router.post('/', createUsuario);

module.exports = router;
