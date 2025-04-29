'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MilitaryRecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rank: {
        type: Sequelize.STRING,
        allowNull: false
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      registry_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      specialty: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profile: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      education_info: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passport_info: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_registered: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_living: {
        type: Sequelize.STRING,
        allowNull: false
      },
      military_office: {
        type: Sequelize.STRING,
        allowNull: false
      },
      special_register: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fitness_for_service: {
        type: Sequelize.STRING,
        allowNull: false
      },
      family_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      position_act: {
        type: Sequelize.STRING,
        allowNull: false
      },
      notification_details: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MilitaryRecords');
  }
};
