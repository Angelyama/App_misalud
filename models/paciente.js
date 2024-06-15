// models/paciente.js
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    sexo: DataTypes.STRING,
    contacto_emergencia_nombre: DataTypes.STRING,
    contacto_emergencia_telefono: DataTypes.STRING,
  }, {});

  Paciente.associate = function(models) {
    Paciente.hasMany(models.Sintoma, { foreignKey: 'ID_Paciente' });
    Paciente.hasMany(models.AdministracionMedicamento, { foreignKey: 'ID_Paciente' });
    Paciente.hasMany(models.HistorialMedico, { foreignKey: 'ID_Paciente' });
    Paciente.hasMany(models.Enfermedad, { foreignKey: 'ID_Paciente' });
    Paciente.hasMany(models.NotificacionMedicamento, { foreignKey: 'ID_Paciente' });
  };

  return Paciente;
};
