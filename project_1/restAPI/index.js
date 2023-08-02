const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const connectDB = require('./config/db') //connection exports

const cors = require('cors')
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const port = process.env.PORT || 5001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})
