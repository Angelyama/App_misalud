"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PreferenciasUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PreferenciasUsuario.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
      });
    }
  }
  PreferenciasUsuario.init(
    {
      usuario_id: DataTypes.INTEGER,
      notificaciones_activas: DataTypes.BOOLEAN,
      frecuencia_recordatorios: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PreferenciasUsuario",
    }
  );
  return PreferenciasUsuario;
};
