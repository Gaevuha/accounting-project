// const { Sequelize } = require('sequelize');
// require('dotenv').config(); // Завантаження змінних середовища
// // console.log(process.env); // Вивести всі змінні середовища
// console.log("DB_PASSWORD:", process.env.DB_PASSWORD);  // Додаємо цей лог, щоб перевірити значення пароля

// // Підключення до бази даних
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//     logging: false,
//   }
// );

// // Імпорт моделі користувача
// const User = require('./user');

// // Синхронізація моделей з базою даних
// sequelize.sync({ force: false }) // `force: false` означає, що таблиця не буде перезаписана, якщо вже існує
//   .then(() => {
//     console.log('Моделі синхронізовані з базою даних');
//     createUser();
//   })
//   .catch((error) => {
//     console.error('Помилка при синхронізації моделей:', error);
//   });

// // Функція для створення користувача (тестового)
// const createUser = async () => {
//   const bcrypt = require('bcrypt');
//   const password = 'Gae$uha1979'; // Твій пароль
//   const hashedPassword = await bcrypt.hash(password, 10); // Хешуємо пароль

//   // Перевірка чи існує користувач
//   const existingUser = await User.findOne({ where: { username: 'admin' } });
//   if (existingUser) {
//     console.log('Користувач вже існує');
//     return;
//   }

//   // Створення нового користувача
//   await User.create({
//     username: 'admin',
//     password: hashedPassword,
//     role: 'admin',
//   });

//   console.log('Користувач створений');
// };

// // Викликаємо функцію для створення користувача
// // createUser();

// module.exports = {
//   sequelize,
//   User,
// };

// models/index.js

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // Завантаження змінних середовища

// Підключення до бази даних
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

// Імпортуємо всі моделі
const userFactory = require('./user');

// Ініціалізуємо моделі
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = userFactory(sequelize, DataTypes);

// Якщо будуть інші моделі, ініціалізуй їх тут так само:
// db.Record = require('./record')(sequelize, DataTypes);

// Експортуємо всі моделі
module.exports = db;
