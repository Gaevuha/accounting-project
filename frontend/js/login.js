document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Запобігаємо стандартній поведінці форми (перезавантаження сторінки)
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const payload = { username, password };

    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok) {
            // Якщо успішно отримали токен
            localStorage.setItem('authToken', data.token);  // Зберігаємо токен у localStorage
            alert("Вхід успішний!");
            // Перехід на іншу сторінку або інші дії
            window.location.href = '/frontend/military-form.html'; // Перехід на головну сторінку (заміни на свій шлях)
        } else {
            // Якщо помилка (неправильний логін/пароль)
            document.getElementById("errorMessage").innerText = data.message || "Сталася помилка при вході!";
        }
    } catch (error) {
        console.error("Помилка при запиті:", error);
        document.getElementById("errorMessage").innerText = "Сервер недоступний. Спробуйте пізніше.";
    }
});
