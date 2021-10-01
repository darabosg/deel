const express = require('express')
const loginRouter = express.Router()

const user = process.env.USER
const password = process.env.PASSWORD
const token = process.env.TOKEN

loginRouter.post('/', (req,res)=>{
    if (user === req.body.userName && password === req.body.password) {
        res.json({token})
    } else {
        res.status(401).json({msg: 'Wrong username or password.'})
    }
})

module.exports = loginRouter