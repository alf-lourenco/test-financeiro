require('dotenv').config()
const express = require('express');
const app = express();
const connectDB = require('./src/db/connectDB');
const AppRoutes = require('./src/routers/index.routes');

app.use(express.json())
connectDB()
AppRoutes(app)
const server = app.listen(process.env.PORT, () => console.log(`Servidor online!`));

module.exports = { app, server };
