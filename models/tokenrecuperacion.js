"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TokenRecuperacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TokenRecuperacion.belongsTo(models.Usuario, { foreignKey: "usuario_id" });
    }
  }
  TokenRecuperacion.init(
    {
      usuario_id: DataTypes.INTEGER,
      token: DataTypes.STRING,
      fecha_expiracion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "TokenRecuperacion",
    }
  );
  return TokenRecuperacion;
};
