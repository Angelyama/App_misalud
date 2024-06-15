// models/preferencia_usuario.js
module.exports = (sequelize, DataTypes) => {
  const PreferenciaUsuario = sequelize.define('PreferenciaUsuario', {
    notificaciones_activas: DataTypes.BOOLEAN,
    frecuencia_recordatorios: DataTypes.STRING,
  }, {});

  PreferenciaUsuario.associate = function(models) {
    PreferenciaUsuario.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  };

  return PreferenciaUsuario;
};
