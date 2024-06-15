// models/notificacion_medicamento.js
module.exports = (sequelize, DataTypes) => {
  const NotificacionMedicamento = sequelize.define('NotificacionMedicamento', {
    fecha_hora: DataTypes.DATE,
    mensaje: DataTypes.TEXT,
    estado: DataTypes.STRING,
  }, {});

  NotificacionMedicamento.associate = function(models) {
    NotificacionMedicamento.belongsTo(models.Paciente, { foreignKey: 'ID_Paciente' });
    NotificacionMedicamento.belongsTo(models.Medicamento, { foreignKey: 'ID_Medicamento' });
  };

  return NotificacionMedicamento;
};
