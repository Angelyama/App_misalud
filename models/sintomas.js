"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sintomas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sintomas.belongsTo(modelsUsuario, { foreignKey: "usuario_id" });
      Sintomas.belongsTo(models.Paciente, { foreignKey: "paciente_id" });
    }
  }
  Sintomas.init(
    {
      usuario_id: DataTypes.INTEGER,
      descripcion: DataTypes.TEXT,
      severidad: DataTypes.STRING,
      duracion: DataTypes.INTEGER,
      fecha_registro: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Sintomas",
    }
  );
  return Sintomas;
};
