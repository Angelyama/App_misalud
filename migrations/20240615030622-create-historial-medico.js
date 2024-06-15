"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HistorialMedicos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Pacientes",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      enfermedad_cronica: {
        type: Sequelize.STRING,
      },
      alergia: {
        type: Sequelize.STRING,
      },
      cirugia_fecha: {
        type: Sequelize.DATE,
      },
      cirugia_detalle: {
        type: Sequelize.TEXT,
      },
      hospitalizacion_fecha: {
        type: Sequelize.DATE,
      },
      hospitalizacion_motivo: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HistorialMedicos");
  },
};
