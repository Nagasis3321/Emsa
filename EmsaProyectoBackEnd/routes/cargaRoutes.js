const express = require('express')
const computadoraController = require('../controllers/computadoraController')

const router = express.Router()

router
    .route('/computadora')
    .get(computadoraController.getAllComputadoras)
    .post(computadoraController.createComputadora);

module.exports = router