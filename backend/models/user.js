// // // 

// // const { DataTypes } = require("sequelize");
// // const sequelize = require("../db"); // Імпортуємо ваше Sequelize-з'єднання

// // const User = sequelize.define("User", {
// //   username: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //     unique: true,
// //   },
// //   password: {
// //     type: DataTypes.STRING,
// //     allowNull: false,
// //   },
// //   role: {
// //     type: DataTypes.STRING,
// //     defaultValue: "user",
// //   },
// // }, {
// //   timestamps: true,
// // });

// // module.exports = User;
// // user.js

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     // визначення атрибутів моделі
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, {
//     // тут можна визначити додаткові опції моделі
//     tableName: 'users',
//     timestamps: true,  // автоматичне додавання полів createdAt та updatedAt
//   });

//   return User;
// };


// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../db'); // Підключення до Sequelize

// const User = sequelize.define('User', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {
//   timestamps: true,
//   tableName: 'users',
// });

// module.exports = User;

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  });

  return User;
};

