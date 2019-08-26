const ctrUsuarios = require('../../app/Controllers/Http/UsuarioController');
const users = new ctrUsuarios()

const resolvers =  {
  Query: {

      anyQuery: (_,args,{ TokenAuth }) => `DATO DE RESPUESTA SERVER GRAPHQL xx ${TokenAuth}`,

      usuarios:(_,args) => {
        return users.index({ request:null, response:null, view:null })
      }

  },
};

module.exports = resolvers;