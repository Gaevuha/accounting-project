// const express = require("express");
// const { MilitaryRecord } = require('../db'); // імпортуємо модель військового запису
// const router = express.Router();
// const jwt = require("jsonwebtoken"); // імпортуємо jwt

// // Middleware для перевірки токену
// router.use((req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// });

// // Отримати всі записи
// router.get("/", async (req, res) => {
//   try {
//     const records = await MilitaryRecord.findAll();
//     res.json(records);
//   } catch (err) {
//     res.status(500).json({ message: "Помилка отримання записів" });
//   }
// });

// // Додати новий запис
// router.post("/", async (req, res) => {
//   const data = req.body;

//   // Перевірка, чи всі обов'язкові поля надані
//   const requiredFields = [
//     "orderNumber", "rank", "full_name", "birth_date", "registry_number", "specialty", 
//     "profile", "category", "education_info", "passport_info",
//     "address_registered", "address_living", "military_office", "special_register",
//     "fitness_for_service", "family_status", "position_act", "notification_details"
//   ];

//   for (let field of requiredFields) {
//     if (!data[field]) {
//       return res.status(400).json({ message: `Поле ${field} є обов'язковим` });
//     }
//   }

//   try {
//     const newRecord = await MilitaryRecord.create({
//       orderNumber: data.orderNumber,
//       rank: data.rank,
//       full_name: data.full_name,
//       birth_date: data.birth_date,
//       registry_number: data.registry_number,
//       specialty: data.specialty,
//       profile: data.profile,
//       category: data.category,
//       education_info: data.education_info,
//       passport_info: data.passport_info,
//       address_registered: data.address_registered,
//       address_living: data.address_living,
//       military_office: data.military_office,
//       special_register: data.special_register,
//       fitness_for_service: data.fitness_for_service,
//       family_status: data.family_status,
//       position_act: data.position_act,
//       notification_details: data.notification_details,     
//     });

//     res.status(201).json(newRecord);
//   } catch (err) {
//     console.error('❌ Помилка при збереженні даних:', err);
//     res.status(500).json({ message: 'Не вдалося зберегти дані' });
//   }
// });

// module.exports = router;

// 

const express = require('express');
const router = express.Router();
const MilitaryRecord = require('../models/militaryRecord'); // Імпорт моделі

// POST-запит для створення нового запису
router.post('/', async (req, res) => {
  const data = req.body;

  const requiredFields = [
    "orderNumber", "rank", "full_name", "birth_date", "registry_number", "specialty", 
    "profile", "category", "education_info", "passport_info",
    "address_registered", "address_living", "military_office",
    "fitness_for_service", "family_status", "position_act", "notification_details"
  ];

  for (let field of requiredFields) {
    if (!data[field] || data[field].toString().trim() === '') {
      return res.status(400).json({ message: `Поле "${field}" є обов'язковим` });
    }
  }

  try {
    const newRecord = await MilitaryRecord.create(data);
    res.status(201).json(newRecord);
  } catch (err) {
    console.error('❌ Помилка при збереженні даних:', err);
    res.status(500).json({ message: 'Не вдалося зберегти дані на сервері' });
  }
});

// Отримання всіх записів
router.get("/", async (req, res) => {
  try {
    const records = await MilitaryRecord.findAll(); // Отримуємо всі записи з бази даних
    res.status(200).json(records);
  } catch (err) {
    console.error('❌ Помилка при отриманні записів:', err);
    res.status(500).json({ message: 'Не вдалося отримати дані з серверу' });
  }
});

// Експортуємо router, щоб Express міг його використати
module.exports = router;
