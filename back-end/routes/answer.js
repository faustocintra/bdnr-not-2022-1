const express = require('express')
const router = express.Router()
const verifyToken = require('../lib/verify_token')

// Importa o controller correspondente
const controller = require('../controllers/answer')

router.post('/', verifyToken, controller.create)
router.get('/assessment/:id', verifyToken, controller.retrieve)

// https://localhost:3000/answer/question/<id do assessment>/<id da question>
router.get('/question/:assessmentId/:questionId', verifyToken, controller.retrieveAnswerByQuestion)

router.get('/:id', verifyToken, controller.retrieveOne)
router.put('/', verifyToken, controller.update)
router.delete('/', verifyToken, controller.delete)

module.exports = router
