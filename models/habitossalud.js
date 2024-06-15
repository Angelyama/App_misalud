"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HabitosSalud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabitosSalud.belongsTo(models.Usuario, { foreignKey: "usuario_id" });
    }
  }
  HabitosSalud.init(
    {
      usuario_id: DataTypes.INTEGER,
      tipo_habito: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      duracion: DataTypes.INTEGER,
      fecha_registro: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "HabitosSalud",
    }
  );
  return HabitosSalud;
};
