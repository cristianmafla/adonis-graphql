'use strict'

const GraphqlAdonis = use('ApolloServer');
const { makeExecutableSchema } = require('graphql-tools')
const { typeDefs , resolvers }   = require('../../../graphql');

class GraphqlController {

  grapqh({ request, auth, response }){
    return GraphqlAdonis.graphql({
      schema:makeExecutableSchema({ typeDefs , resolvers }),
      context: { TokenAuth:'Mitoken' },
    }, request, response)
  }

  graphqli({ request, response }){ 
    GraphqlAdonis.graphiql({ endpointURL: '/graphql' }, request, response) 
  }
}

module.exports = GraphqlController
