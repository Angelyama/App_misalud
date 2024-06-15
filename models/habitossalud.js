// models/habito_salud.js
module.exports = (sequelize, DataTypes) => {
  const HabitoSalud = sequelize.define('HabitoSalud', {
    tipo_habito: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    duracion: DataTypes.INTEGER,
    fecha_registro: DataTypes.DATE,
  }, {});

  HabitoSalud.associate = function(models) {
    HabitoSalud.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  };

  return HabitoSalud;
};
