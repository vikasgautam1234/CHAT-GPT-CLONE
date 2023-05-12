const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const colors = require('colors')
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const errorHandler = require('./middlewares/errorMiddleware')

//dotenv
dotenv.config()
   
connectDB()

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"))    //with the help of dev we will get the short URL link in the console
app.use(errorHandler)

const PORT = process.env.PORT || 8080

//API router
app.use('/api/v1/auth', authRoutes)  //URL pattern

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} on port no ${PORT}`.bgCyan.white)
}) 
