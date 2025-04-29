//frontend/js/script.js

document.getElementById('militaryForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const token = localStorage.getItem('authToken'); // Токен з логіну

  if (!token) {
    alert("Користувач не авторизований");
    return;
  }

const formData = {
  orderNumber: document.getElementById('orderNumber').value,
  rank: document.getElementById('rank').value,
  full_name: document.getElementById('fullName').value,
  birth_date: document.getElementById('dob').value,
  registry_number: document.getElementById('registrationNumber').value,
  specialty: document.getElementById('specialty').value,
  profile: document.getElementById('corps').value,
  category: document.getElementById('accountingCategory').value,
  education_info: document.getElementById('education').value,
  passport_info: document.getElementById('passportDetails').value,
  address_registered: document.getElementById('registeredAddress').value,
  address_living: document.getElementById('actualAddress').value,
  military_office: document.getElementById('militaryOffice').value,
  special_register: document.getElementById('specialRegister').value,
  fitness_for_service: document.getElementById('fitnessForService').value,
  family_status: document.getElementById('familyStatus').value,
  position_act: document.getElementById('positionAct').value,
  notification_details: document.getElementById('notificationDetails').value
};

  try {
    const response = await fetch('http://localhost:5000/api/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    // Виведення відповіді сервера як текст
    const text = await response.text();
    console.log(text); // Виводимо текст у консоль, щоб побачити, що повертає сервер

    try {
      const data = JSON.parse(text); // Спочатку намагаємось парсити відповідь як JSON
      if (response.ok) {
        alert("✅ Дані успішно збережені!");
        document.getElementById('militaryForm').reset();
      } else {
        alert("❌ Помилка: " + (data.message || "Невідомо"));
      }
    } catch (error) {
      console.error("Помилка при обробці JSON:", error);
      alert("❌ Сталася помилка при з'єднанні з сервером.");
    }

  } catch (error) {
    console.error("❌ Помилка при відправці:", error);
    alert("❌ Сталася помилка при з'єднанні з сервером.");
  }


});

// 
// frontend/js/script.js

// 
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('militaryForm');
//   const recordsList = document.getElementById('recordsList'); // Секція для виведення записів

//   // Функція для завантаження записів з сервера
//   const loadRecords = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/records');
//       if (!response.ok) {
//         throw new Error('Не вдалося отримати записи з сервера');
//       }
//       const records = await response.json();

//       recordsList.innerHTML = ''; // Очищаємо список перед виведенням нових записів

//       if (records.length === 0) {
//         recordsList.innerHTML = '<li>Немає записів для відображення</li>';
//       } else {
//         records.forEach(record => {
//           const listItem = document.createElement('li');
//           listItem.textContent = `№ ${record.orderNumber} — ${record.full_name}, ${record.rank}`;
//           recordsList.appendChild(listItem);
//         });
//       }
//     } catch (error) {
//       console.error('❌ Помилка з’єднання з сервером:', error);
//       iziToast.error({
//         title: 'Помилка',
//         message: 'Не вдалося з’єднатися з сервером.',
//         position: 'topRight'
//       });
//     }
//   };

//   // Завантажуємо записи при завантаженні сторінки
//   loadRecords();

//   // Обробка форми
//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch('http://localhost:5000/api/records', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         iziToast.error({
//           title: 'Помилка',
//           message: result.message || 'Помилка збереження даних.',
//           position: 'topRight'
//         });
//         return;
//       }

//       iziToast.success({
//         title: 'Успіх',
//         message: 'Дані успішно збережені',
//         position: 'topRight'
//       });

//       form.reset(); // Очищаємо форму після успішного збереження

//       // Завантажуємо список записів після успішного додавання
//       loadRecords();

//     } catch (error) {
//       console.error('❌ Помилка з’єднання з сервером:', error);
//       iziToast.error({
//         title: 'Помилка',
//         message: 'Не вдалося з’єднатися з сервером.',
//         position: 'topRight'
//       });
//     }
//   });
// });
