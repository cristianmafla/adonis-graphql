'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    codigo:DataTypes.STRING,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
    Roles.belongsToMany(models.Usuarios,{through: 'RolesUsuarios',foreignKey:'idRol'})
  };
  return Roles;
};