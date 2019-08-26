'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    timestamps: true
  });
  Usuarios.associate = function(models) {
    // associations can be defined here
    Usuarios.belongsToMany(models.Roles,{through: 'RolesUsuarios', foreignKey:'idUsuario'})
  };
  return Usuarios;
};