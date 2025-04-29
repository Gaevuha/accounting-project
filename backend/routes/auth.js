// // // routes/auth.js
// // const express = require('express');
// // const router = express.Router();
// // const authController = require('../controllers/authController');

// // // Реєстрація
// // router.post('/register', authController.register);

// // // Логін
// // router.post('/login', authController.login);

// // module.exports = router;

// // routes/auth.js
// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // Логування контролера для перевірки, що функції є доступними
// console.log('authController:', authController);

// router.post('/register', authController.register);
// router.post('/login', authController.login);

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Маршрут для реєстрації
router.post('/register', authController.register);

// Маршрут для логування
router.post('/login', authController.login);

module.exports = router;
