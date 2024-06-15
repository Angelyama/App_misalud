// models/recordatorio.js
module.exports = (sequelize, DataTypes) => {
  const Recordatorio = sequelize.define('Recordatorio', {
    tipo_recordatorio: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    frecuencia: DataTypes.STRING,
    hora: DataTypes.DATE,
    activo: DataTypes.BOOLEAN,
  }, {});

  Recordatorio.associate = function(models) {
    Recordatorio.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  };

  return Recordatorio;
};
