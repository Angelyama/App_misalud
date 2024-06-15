// models/notificacion.js
module.exports = (sequelize, DataTypes) => {
  const Notificacion = sequelize.define('Notificacion', {
    mensaje: DataTypes.TEXT,
    fecha_envio: DataTypes.DATE,
    tipo_notificacion: DataTypes.STRING,
  }, {});

  Notificacion.associate = function(models) {
    Notificacion.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  };

  return Notificacion;
};
