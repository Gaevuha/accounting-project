//models/militaryRecords.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');  // Підключення до бази даних

const MilitaryRecord = sequelize.define('MilitaryRecord', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,  // Це поле є первинним ключем
    autoIncrement: true,  // Автоматичне збільшення значення
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rank: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  registry_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  education_info: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passport_info: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_registered: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_living: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  military_office: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  special_register: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fitness_for_service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  family_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position_act: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notification_details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'MilitaryRecords',
  timestamps: true,
});

module.exports = MilitaryRecord;

