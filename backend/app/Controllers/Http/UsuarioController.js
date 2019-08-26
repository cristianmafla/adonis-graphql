'use strict'

const { Usuarios, Roles } = require('../../../sequelize_database/models');
const { validateMethod, catchError } = require('../utils');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with usuarios
 */
class UsuarioController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index (context) {
    return Usuarios.findAll({
      // include:[Roles],
      include:[{
        model:Roles,
        attributes:{exclude:['createdAt','updatedAt']}
        // attributes:['codigo','nombre','descripcion']
      }]
    })
    .then(usuarios => validateMethod({ data:usuarios,context }))
    .catch(error => catchError({ context, error }));
  }

  /**
   * Render a form to be used for creating a new usuario.
   * GET usuarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create (context) {
    
  }

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store (context) {
    const {nombre, apellido, email,
      contrasena, avatar, roles } = context.request.body;
    return  Usuarios.create({ nombre, apellido, email, contrasena, avatar })
    .then( usuario => {
       return usuario.addRoles(roles)
       .then(() => validateMethod({ data:usuario, context }))
       .catch(error => catchError({ context, error }));
    })
    .catch(error => catchError({ context, error }));
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show (context) {
    return Usuarios.findAll({
      where:{id:context.params.id},
      include:[Roles]
    })
    .then(usuario => validateMethod( {context, data:usuario }))
    .catch(error => catchError({ context, error }));
  }

  /**
   * Render a form to update an existing usuario.
   * GET usuarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update (context) {
    const {nombre, apellido, email,
      contrasena, avatar, roles } = context.request.body;

    return Usuarios.update({ 
      nombre, apellido, email,
      contrasena, avatar 
    },{
      where:{ id:context.params.id },
      returning: true,
      plain: true
    })
    .then( (usuario) => {
      console.log('UPDATE USER::',usuario)
      if(Number(usuario[1]) === 1){
        validateMethod({ context, data:context.request.body })
      }else{
        catchError({ context, error:{
          name:'error update',
          message:'no se pudo actualizar el registro'
        } });
      };
    })
    .catch(error => catchError({ context, error }))
  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UsuarioController
