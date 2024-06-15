"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Enfermedads", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      descripcion: {
        type: Sequelize.TEXT,
      },
      sintomas: {
        type: Sequelize.STRING,
      },
      tratamiento: {
        type: Sequelize.STRING,
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
      estado: {
        type: Sequelize.STRING,
      },
      fecha_diagnostico: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Enfermedads");
  },
};
