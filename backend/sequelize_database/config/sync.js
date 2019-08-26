const path = require('path');
require('dotenv').config({path: path.join(__dirname, '/../../.env')});
const db  = require('../models');

// const mysql = require('mysql2/promise');
// mysql.createConnection({
//     host: process.env.HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
// }).then( connection => {
//   connection.query(`DROP DATABASE IF EXISTS ${process.env.DB_DATABASE}`)
//   .then(res => {
//     console.log(`SE ELIMINO LA BASE DE DATOS ${process.env.DB_DATABASE}`)
//   })
//   .then( res => {
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_DATABASE};`)
//     .then((res) => {
//       console.info(`SE CREO NUEVAMENTE LA BASE DE DATOS: ${process.env.DB_DATABASE}`); 
//     })
//     .catch(error => console.log(`ERROR AL CREAR LA BASE DE DATOS: ${process.env.DB_DATABASE}`,error))
//   })
//   .catch(error => console.log(`ERROR AL ELIMINAR LA BASE DE DATOS: ${process.env.DB_DATABASE}`))
// })
// .catch(error => console.log('NO SE PUEDE ESTABLECER LA CONEXION AL GESTOR DE BASE DE DATOS', error))

const force = process.env.DB_FORCE === 'true' ? true : false;
db.sequelize.sync({ force }).then(() => {
    force 
    ? console.log(`*** SE CREO NUEVAMENTE LA BASE DE DATOS: ${process.env.DB_DATABASE} ***`)
    : console.log(`*** SE REFRESCO LA BASE DE DATOS: ${process.env.DB_DATABASE} ***`);
})
.catch(error => {
    force
    ? console.log(`*** OCURRIO UN ERROR AL CREAR LA BASE DE DATOS: ${process.env.DB_DATABASE}  ***`, error)
    : console.log(`*** OCURRIO UN ERROR AL REFRESCAR LA BASE DE DATOS: ${process.env.DB_DATABASE}  ***`, error)
});