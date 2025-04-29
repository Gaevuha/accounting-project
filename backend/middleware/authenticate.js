const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Отримуємо токен з заголовків
  const token = req.headers['authorization']?.split(' ')[1]; // формат "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Не авторизовано. Токен відсутній." });
  }

  try {
    // Перевірка токену
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Додаємо decoded data (наприклад, id та role) до об'єкта req для використання в маршрутах
    req.user = decoded;

    next(); // Далі йдемо до обробника маршруту
  } catch (error) {
    return res.status(401).json({ message: "Невірний або прострочений токен." });
  }
};
