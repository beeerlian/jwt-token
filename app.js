const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//import routes
const authRoute = require('./routes/auth');


dotenv.config()

//connect to mongodb
mongoose.connect(
    process.env.DB_CONNECT, { useNewUrlParser: true },
    () => console.log('connected to db'))

//Middleware
app.use(express.json())

//route middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('app was running'));