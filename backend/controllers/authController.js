// // // 

// // const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/user");

// // exports.register = async (req, res) => {
// //   const { username, password, role } = req.body;

// //   try {
// //     const existingUser = await User.findOne({ where: { username } });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "Користувач вже існує" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = await User.create({
// //       username,
// //       password: hashedPassword,
// //       role: role || "user",
// //     });

// //     const token = jwt.sign(
// //       { id: newUser.id, role: newUser.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "1d" }
// //     );

// //     res.status(201).json({ token });

// //   } catch (err) {
// //     console.error("💥 Помилка при реєстрації:", err);
// //     res.status(500).json({ message: "Помилка сервера" });
// //   }
// // };

// // exports.login = async (req, res) => {
// //   const { username, password } = req.body;

// //   try {
// //     const user = await User.findOne({ where: { username } });

// //     if (!user) {
// //       return res.status(401).json({ message: "Користувача не знайдено" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(401).json({ message: "Невірний пароль" });
// //     }

// //     const token = jwt.sign(
// //       { id: user.id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "1d" }
// //     );

// //     res.json({ token });

// //   } catch (err) {
// //     console.error("💥 Помилка при логіні:", err);
// //     res.status(500).json({ message: "Помилка сервера" });
// //   }
// // };

// // // Логін користувача
// // exports.login = async (req, res) => {
// //   const { username, password } = req.body;

// //   try {
// //     // Шукаємо користувача в базі за ім'ям
// //     const user = await User.findOne({ where: { username } });

// //     if (!user) {
// //       return res.status(401).json({ message: "Користувача не знайдено" });
// //     }

// //     // Перевірка паролю
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(401).json({ message: "Невірний пароль" });
// //     }

// //     // Генерація токену
// //     const token = jwt.sign(
// //       { id: user.id, role: user.role },
// //       process.env.JWT_SECRET,
// //       { expiresIn: "1d" }
// //     );

// //     res.json({ token });

// //   } catch (err) {
// //     console.error("💥 Помилка при логіні:", err);
// //     res.status(500).json({ message: "Помилка сервера" });
// //   }
// // };


// // controllers/authController.js
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user");

// exports.register = async (req, res) => {
//   const { username, password, role } = req.body;
//   console.log('Дані для реєстрації:', { username, password, role });

//   try {
//     const existingUser = await User.findOne({ where: { username } });
//     if (existingUser) {
//       return res.status(400).json({ message: "Користувач вже існує" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({
//       username,
//       password: hashedPassword,
//       role: role || "user",
//     });

//     const token = jwt.sign(
//       { id: newUser.id, role: newUser.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.status(201).json({ token });
//   } catch (err) {
//     console.error("💥 Помилка при реєстрації:", err);
//     res.status(500).json({ message: "Помилка сервера", error: err });
//   }
// };

// exports.login = async (req, res) => {
//   // Логіка для логіну (якщо є)
// };

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const dotenv = require('dotenv');
dotenv.config();

// Реєстрація користувача
const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Перевірка, чи існує вже користувач
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'Користувач з таким ім\'ям вже існує' });
    }

    // Хешування пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Створення нового користувача
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Користувач створений успішно' });
  } catch (error) {
    console.error('Помилка при реєстрації:', error);
    res.status(500).json({ message: 'Виникла помилка при реєстрації користувача' });
  }
};

// Логування користувача
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Знаходимо користувача
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Невірне ім\'я або пароль' });
    }

    // Перевірка пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Невірний ім\'я або пароль' });
    }

    // Генерація JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Логін успішний', token });
  } catch (error) {
    console.error('Помилка при логуванні:', error);
    res.status(500).json({ message: 'Виникла помилка при логуванні' });
  }
};

module.exports = {
  register,
  login,
};
