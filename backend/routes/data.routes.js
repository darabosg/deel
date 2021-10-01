const express = require('express')
const dataRouter = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')

const response = [
    { id: 1, text: 'First' },
    { id: 2, text: 'Second' },
    { id: 3, text: 'Third' },
]

dataRouter.get('/', authMiddleware, (req, res) => res.json(response))

module.exports = dataRouter
