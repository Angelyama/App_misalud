"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.HabitosSalud, {
        foreignKey: "usuario_id",
      });
      Usuario.hasMany(models.Medicacion, {
        foreignKey: "usuario_id",
      });
      Usuario.hasOne(models.PreferenciasUsuario, {
        foreignKey: "usuario_id",
      });
      Usuario.hasMany(models.Sintomas, {
        foreignKey: "usuario_id",
      });
      Usuario.hasMany(models.Notificaciones, {
        foreignKey: "usuario_id",
      });
      Usuario.hasMany(models.Recordatorio, {
        foreignKey: "usuario_id",
      });
      Usuario.hasOne(models.TokenRecuperacion, {
        foreignKey: "usuario_id",
      });
    }
  }
  Usuario.init(
    {
      nombre: DataTypes.STRING,
      correo: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      verificado: DataTypes.BOOLEAN,
      ultima_sesion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
