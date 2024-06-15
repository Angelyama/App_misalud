"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NotificacionMedicamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NotificacionMedicamentos.belongsTo(models.Paciente, {
        foreignKey: "paciente_id",
      });
      NotificacionMedicamentos.belongsTo(models.Medicamento, {
        foreignKey: "medicamento_id",
      });
    }
  }
  NotificacionMedicamentos.init(
    {
      paciente_id: DataTypes.INTEGER,
      medicamento_id: DataTypes.INTEGER,
      fecha_hora: DataTypes.DATE,
      mensaje: DataTypes.TEXT,
      estado: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "NotificacionMedicamentos",
    }
  );
  return NotificacionMedicamentos;
};
