const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const routes = require('./routes/taskRoutes')

const app = express()
const URL = 'mongodb://127.0.0.1:27017/finalproject'
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(URL)
.then(()=>{console.log('Database connected')})
.catch(error => console.log(error))

app.use('/api', routes)
app.listen(port, ()=>console.log(`Server is listening on port ${port}`))