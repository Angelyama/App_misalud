'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enfermedad', {
      ID_Enfermedad: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Descripcion: {
        type: Sequelize.TEXT
      },
      Sintomas: {
        type: Sequelize.TEXT
      },
      Tratamiento: {
        type: Sequelize.TEXT
      },
      ID_Paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Paciente',
          key: 'ID_Paciente'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Estado: {
        type: Sequelize.STRING
      },
      Fecha_Diagnostico: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enfermedad');
  }
};
