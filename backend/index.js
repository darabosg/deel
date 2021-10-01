require('dotenv').config()
const express = require('express')
const cors = require('cors')
const loginRouter = require('./routes/login.routes')
const dataRouter = require('./routes/data.routes')


const app = express()


app.use(cors())
app.use(express.json())

app.use('/api/login', loginRouter)
app.use('/api/data', dataRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`INFO: Started Express app on port: ${port}`)
})
