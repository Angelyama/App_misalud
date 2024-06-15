"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notificaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notificaciones.belongsTo(models.Usuario, { foreignKey: "usuario_id" });
    }
  }
  Notificaciones.init(
    {
      usuario_id: DataTypes.INTEGER,
      mensaje: DataTypes.TEXT,
      fecha_envio: DataTypes.DATE,
      tipo_notificacion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Notificaciones",
    }
  );
  return Notificaciones;
};
