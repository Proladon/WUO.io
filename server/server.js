const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const order = require('./router/order')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


mongoose.connect(
    `mongodb://Proladon:${process.env["PASSWORD"]}@cluster0-shard-00-00.rqkkm.mongodb.net:27017,cluster0-shard-00-01.rqkkm.mongodb.net:27017,cluster0-shard-00-02.rqkkm.mongodb.net:27017/${process.env["DB_NAME"]}?ssl=true&replicaSet=atlas-dslk13-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useUnifiedTopology: true},
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error !'))
db.once('open', ()=>console.log('DB Connected !'))

app.use('/order/', order)





app.listen(port, ()=>{
    console.log(`Server on: http://localhost:${port}`)
})