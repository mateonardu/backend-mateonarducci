const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Intentando conectar a Mongo con URI:');
    console.log(process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ ERROR REAL DE MONGODB ↓↓↓');
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

