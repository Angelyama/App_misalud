// models/sintoma.js
module.exports = (sequelize, DataTypes) => {
  const Sintoma = sequelize.define('Sintoma', {
    descripcion: DataTypes.TEXT,
    severidad: DataTypes.INTEGER,
    duracion: DataTypes.INTEGER,
    fecha_registro: DataTypes.DATE,
  }, {});

  Sintoma.associate = function(models) {
    Sintoma.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    Sintoma.belongsTo(models.Paciente, { foreignKey: 'ID_Paciente' });
  };

  return Sintoma;
};
