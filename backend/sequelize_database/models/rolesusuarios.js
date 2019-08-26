'use strict';
module.exports = (sequelize, DataTypes) => {
  const RolesUsuarios = sequelize.define('RolesUsuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idUsuario: DataTypes.INTEGER,
    idRol: DataTypes.INTEGER
  }, {});
  RolesUsuarios.associate = function(models) {
    // associations can be defined here
  };
  return RolesUsuarios;
};