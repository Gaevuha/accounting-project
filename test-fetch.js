const fetch = require("node-fetch"); // Для серверної частини, якщо ви не використовуєте браузер

// // Реєстрація нового користувача
// fetch("http://localhost:5000/api/auth/register", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     username: "testuser2",
//     password: "testpass123",
//     role: "user"
//   })
// })
//   .then(res => res.json())
//   .then(data => {
//     console.log("✅ Успішна реєстрація. Отримано відповідь:");
//     console.log(data);
//   })
//   .catch(err => {
//     console.error("❌ Помилка при запиті:", err);
//   });

fetch("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: "testuser3",
    password: "testpass123"
  })
})
  .then(res => res.json())
  .then(data => {
    console.log("✅ Успішний вхід:", data);
  })
  .catch(err => {
    console.error("❌ Помилка при запиті:", err);
  });

