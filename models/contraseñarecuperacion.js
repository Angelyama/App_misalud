// models/contraseña_recuperacion.js
module.exports = (sequelize, DataTypes) => {
  const ContraseñaRecuperacion = sequelize.define('ContraseñaRecuperacion', {
    token: DataTypes.STRING,
    fecha_expiracion: DataTypes.DATE,
  }, {});

  ContraseñaRecuperacion.associate = function(models) {
    ContraseñaRecuperacion.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  };

  return ContraseñaRecuperacion;
};
