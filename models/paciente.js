"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Paciente.hasOne(models.HistorialMedico, { foreignKey: "paciente_id" });
      Paciente.hasMany(models.Sintomas, { foreignKey: "paciente_id" });
      Paciente.hasMany(models.Enfermedad, { foreignKey: "paciente_id" });
      Paciente.hasMany(models.AdministracionMedicamentos, {
        foreignKey: "paciente_id",
      });
      Paciente.hasMany(models.NotificacionMedicamentos, {
        foreignKey: "paciente_id",
      });
    }
  }
  Paciente.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      fecha_nacimiento: DataTypes.DATE,
      sexo: DataTypes.STRING,
      contacto_emergencia_nombre: DataTypes.STRING,
      contacto_emergencia_telefono: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Paciente",
    }
  );
  return Paciente;
};
