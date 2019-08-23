const resolvers =  {
  Query: {

      anyQuery: (_,args,{ TokenAuth }) => `DATO DE RESPUESTA SERVER GRAPHQL xx ${TokenAuth}`

  },
};

module.exports = resolvers;