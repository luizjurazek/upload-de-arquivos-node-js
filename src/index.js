const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')



/**
 * Database setup
 */
 mongoose.set('strictQuery', true); // Removendo warning 
 mongoose.connect("mongodb://127.0.0.1/upload").then(() => {
     console.log("Conectado ao mongo");
 }).catch((err) => {
     console.log("Erro ao se conectar: " + err);
 });

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))

app.use(require("./routes"))

app.listen(3000)