'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')


class UserSeeder {
  async run () {
    const users =  await Database.table('users').insert([
      { id: 1, username: 'user1',email:'user1@email.com',password:'1234',created_at:new Date(),updated_at:new Date() },
      { id: 2, username: 'user2',email:'user2@email.com',password:'1234',created_at:new Date(),updated_at:new Date() },
      { id: 3, username: 'user3',email:'user3@email.com',password:'1234',created_at:new Date(),updated_at:new Date() },
    ])
    console.log(users)

    // const usersArray = await Factory
    // .model('App/Models/User')
    // .createMany(5)
    // console.log(usersArray)


  }
}

module.exports = UserSeeder
