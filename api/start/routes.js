'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const { grapqh, graphqli } = require('../app/graphql');


Route.on('/').render('welcome')

Route.get('/controlador','MicontroladorController.index')

Route.route('/graphql', grapqh , ['GET', 'POST'])

Route.get('/graphiql', graphqli);

