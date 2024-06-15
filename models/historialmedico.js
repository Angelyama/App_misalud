// models/historial_medico.js
module.exports = (sequelize, DataTypes) => {
  const HistorialMedico = sequelize.define('HistorialMedico', {
    enfermedad_cronica: DataTypes.STRING,
    alergia: DataTypes.STRING,
    cirugia_fecha: DataTypes.DATE,
    cirugia_detalle: DataTypes.STRING,
    hospitalizacion_fecha: DataTypes.DATE,
    hospitalizacion_motivo: DataTypes.STRING,
  }, {});

  HistorialMedico.associate = function(models) {
    HistorialMedico.belongsTo(models.Paciente, { foreignKey: 'ID_Paciente' });
  };

  return HistorialMedico;
};
