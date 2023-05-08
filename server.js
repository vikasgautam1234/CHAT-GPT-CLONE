const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//dotenv
dotenv.config()
   
connectDB()

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))    //with the help of dev we will get the short URL link in the console


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} on port no ${PORT}`.bgCyan.white)
}) 
