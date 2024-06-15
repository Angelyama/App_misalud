"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HistorialMedico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HistorialMedico.belongsTo(models.Paciente, { foreignKey: "paciente_id" });
    }
  }
  HistorialMedico.init(
    {
      paciente_id: DataTypes.INTEGER,
      enfermedad_cronica: DataTypes.STRING,
      alergia: DataTypes.STRING,
      cirugia_fecha: DataTypes.DATE,
      cirugia_detalle: DataTypes.TEXT,
      hospitalizacion_fecha: DataTypes.DATE,
      hospitalizacion_motivo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "HistorialMedico",
    }
  );
  return HistorialMedico;
};
