"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AdministracionMedicamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AdministracionMedicamentos.belongsTo(models.Paciente, {
        foreignKey: "paciente_id",
      });
      AdministracionMedicamentos.belongsTo(modelsMedicamento, {
        foreignKey: "medicamento_id",
      });
    }
  }
  AdministracionMedicamentos.init(
    {
      paciente_id: DataTypes.INTEGER,
      medicamento_id: DataTypes.INTEGER,
      fecha_hora: DataTypes.DATE,
      comentario: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "AdministracionMedicamentos",
    }
  );
  return AdministracionMedicamentos;
};
