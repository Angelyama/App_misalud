// models/enfermedad.js
module.exports = (sequelize, DataTypes) => {
  const Enfermedad = sequelize.define('Enfermedad', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    sintomas: DataTypes.TEXT,
    tratamiento: DataTypes.TEXT,
    estado: DataTypes.STRING,
    fecha_diagnostico: DataTypes.DATE,
  }, {});

  Enfermedad.associate = function(models) {
    Enfermedad.belongsTo(models.Paciente, { foreignKey: 'ID_Paciente' });
  };

  return Enfermedad;
};
