'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Usuarios', [{
        nombre: 'cristian andres',
        apellido: 'salazar mafla',
        email:'admin@email.com',
        contrasena:'1234',
        avatar:'../ruta/usuario/avatar/avatar.png',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Usuarios', null, {});

  }
};
