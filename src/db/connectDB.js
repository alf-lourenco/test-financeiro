const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://root:E1lYrCNnOiDbsW3o@cluster0.w8qusu6.mongodb.net/mentoria?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Conectado');
  } catch (error) {
    console.log('Erro ao conectar', error);
  }
}
module.exports = connectDB;
