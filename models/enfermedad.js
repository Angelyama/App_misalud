"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Enfermedad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enfermedad.belongsTo(models.Paciente, { foreignKey: "paciente_id" });
    }
  }
  Enfermedad.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.TEXT,
      sintomas: DataTypes.STRING,
      tratamiento: DataTypes.STRING,
      paciente_id: DataTypes.INTEGER,
      estado: DataTypes.STRING,
      fecha_diagnostico: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Enfermedad",
    }
  );
  return Enfermedad;
};
