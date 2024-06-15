'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Administracion_Medicamento', {
      ID_Administracion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Paciente: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Paciente',
          key: 'ID_Paciente'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      ID_Medicamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Medicamento',
          key: 'ID_Medicamento'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Fecha_Hora: {
        type: Sequelize.DATE
      },
      Comentarios: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Administracion_Medicamento');
  }
};
