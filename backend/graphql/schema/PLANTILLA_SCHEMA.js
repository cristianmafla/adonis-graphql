const gql = require('graphql-tag');

const typeDefs = gql`

 type Query {
     """ EXAMPLE QUERY SCHEMA """
    anyQuery:String

    """ EXAMPLE QUERY SCHEMA """
    usuarios:[Usuarios]
 }

type Usuarios {
    nombre:String
    apellido:String
    email:String
    avatar:String
    Roles:[Rol]
}
type Rol {
    codigo:String
    nombre:String
    descripcion:String
}
` ;
module.exports = typeDefs;