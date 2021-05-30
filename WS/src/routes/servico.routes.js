const express = require('express');
const router = express.Router();

const Salao = require('../models/salao');
const Servico = require('../models/servico');

router.post('/', async (req, res) => {
  try {
    res.json({ salao });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
