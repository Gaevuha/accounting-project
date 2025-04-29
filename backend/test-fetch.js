fetch("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: "newuser1", // 🔁 Заміни на фактичне ім’я користувача
    password: "password123" // 🔁 І пароль
  })
})
  .then(async res => {
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Сервер повернув помилку: ${res.status} - ${errorText}`);
    }
    return res.json();
  })
  .then(data => {
    console.log("✅ Успішний вхід:", data);
    // Можеш тут зберегти токен або перенаправити користувача
    // localStorage.setItem('token', data.token);
    // window.location.href = "/dashboard.html";
  })
  .catch(err => {
    console.error("❌ Помилка при запиті:", err.message);
  });



// fetch('http://localhost:5000/api/auth/register', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     username: 'newuser1',
//     password: 'password123',
//   }),
// })
//   .then(async res => {
//     const contentType = res.headers.get('content-type');
//     if (!res.ok) {
//       const text = await res.text();
//       throw new Error(`Помилка ${res.status}: ${text}`);
//     }
//     if (contentType && contentType.includes('application/json')) {
//       return res.json();
//     } else {
//       const text = await res.text();
//       throw new Error(`Очікував JSON, отримав: ${text}`);
//     }
//   })
//   .then(data => {
//     console.log('Реєстрація успішна:', data);
//   })
//   .catch(err => {
//     console.error('Помилка при реєстрації:', err.message);
//   });

