const taskRoutes = require('./routes/task.routes');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


app.use(errorMiddleware);

module.exports = app;
