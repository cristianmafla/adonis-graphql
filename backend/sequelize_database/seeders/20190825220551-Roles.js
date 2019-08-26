'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Roles', [{
        codigo:'admon',
        nombre: 'Administrador',
        descripcion: 'administrador del sitio'
      },{
        codigo:'sup',
        nombre: 'Supervisor',
        descripcion: 'usuario regular del sitio'
      },{
        codigo:'opd',
        nombre: 'Operador',
        descripcion: 'usuario regular del sitio'
      },{
        codigo:'ivnt',
        nombre: 'Invitado',
        descripcion: 'invitado del sitio'
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Roles', null, {});
 
  }
};
