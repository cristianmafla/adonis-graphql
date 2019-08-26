'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('RolesUsuarios', [
        { id:1, idUsuario: 1, idRol: 1 },
        { id:2, idUsuario: 1, idRol: 2 },
        { id:3, idUsuario: 1, idRol: 3 }
      ], {});
   
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('RolesUsuarios', null, {});

  }
};
