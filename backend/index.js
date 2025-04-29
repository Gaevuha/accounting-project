// // 
// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const recordRoutes = require('./routes/records');
// // const sequelize = require('./db'); // <- тут вже Sequelize
// const { sequelize, User } = require('./models'); // Завантажуємо модель, щоб зареєструвати її в Sequelize

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/records', recordRoutes);

// // Підключення до БД та запуск сервера
// sequelize.authenticate()
//   .then(() => {
//     console.log('✅ Підключено до бази даних');

//     // Синхронізуємо всі моделі з БД
//     return sequelize.sync(); // { force: true } або { alter: true } для створення таблиць
//   })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Сервер запущено на порту ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ Помилка підключення до бази даних:', err);
//     process.exit(1);
//   });

  



// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const sequelize = require('./db');
// const User = require('./models/user');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);

// sequelize.authenticate()
//   .then(() => {
//     console.log('✅ Підключено до бази даних');
//     return sequelize.sync();
//   })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`🚀 Сервер запущено на порту ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ Помилка підключення до бази даних:', err);
//     process.exit(1);
//   });
const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const recordsRoutes = require('./routes/records');
const app = express();
const cors = require('cors');

app.use(cors());

// Middleware для парсингу JSON
app.use(express.json());

// Роути
app.use('/api/auth', authRoutes);
app.use('/api/records', recordsRoutes);

// Підключення до бази даних
sequelize.sync()
  .then(() => {
    console.log('✅ Підключено до бази даних');
    app.listen(5000, () => {
      console.log('🚀 Сервер працює на порту 5000');
    });
  })
  .catch((error) => {
    console.error('❌ Не вдалося підключитися до бази даних:', error);
  });
