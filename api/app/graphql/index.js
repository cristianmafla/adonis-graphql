const GraphqlAdonis = use('ApolloServer');
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./schema');
const resolvers = require('./resolvers')

module.exports = {
  grapqh:({ request, auth, response }) => {
    return GraphqlAdonis.graphql({
      schema:makeExecutableSchema({ typeDefs, resolvers }),
      context: { TokenAuth:'Mitoken' },
    }, request, response)
  },
  graphqli:({ request, response }) => {
    return GraphqlAdonis.graphiql({ endpointURL: '/graphql' }, request, response)
  }
}