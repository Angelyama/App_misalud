// models/usuario.js
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    verificado: DataTypes.BOOLEAN,
    fecha_creacion: DataTypes.DATE,
    ultima_sesion: DataTypes.DATE,
  }, {});

  Usuario.associate = function(models) {
    Usuario.hasMany(models.ContraseñaRecuperacion, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.Sintoma, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.Medicacion, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.HabitoSalud, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.Recordatorio, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.Notificacion, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.PreferenciaUsuario, { foreignKey: 'usuario_id' });
  };

  return Usuario;
};
