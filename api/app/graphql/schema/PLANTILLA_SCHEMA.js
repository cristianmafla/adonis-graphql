const gql = require('graphql-tag');

const typeDefs = gql`

 type Query {
     """ EXAMPLE QUERY SCHEMA """
    anyQuery:String
 }

` ;
module.exports = typeDefs;