const bcrypt = require("bcrypt");

const password = "Gae$uha1979"; // або інший пароль, який хочеш
bcrypt.hash(password, 10).then(hash => {
  console.log("Захешований пароль:", hash);
});
