// models/administracion_medicamento.js
module.exports = (sequelize, DataTypes) => {
  const AdministracionMedicamento = sequelize.define('AdministracionMedicamento', {
    fecha_hora: DataTypes.DATE,
    comentarios: DataTypes.TEXT,
  }, {});

  AdministracionMedicamento.associate = function(models) {
    AdministracionMedicamento.belongsTo(models.Paciente, { foreignKey: 'ID_Paciente' });
    AdministracionMedicamento.belongsTo(models.Medicamento, { foreignKey: 'ID_Medicamento' });
  };

  return AdministracionMedicamento;
};
