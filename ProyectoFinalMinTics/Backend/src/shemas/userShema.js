const  { makeExecutableSchema } =  require("graphql-tools");
const  resolvers  =  require("../resolvers/userResovers");

const typeDefs = `

    type Query{
        hello: String
        Users: [User]
        userById(_id: ID): User
        login(correo: String, contrasena: String): User
        userBytype(tipoUsuario: String): [User]
    }

    type Mutation {
        createUser(input: UserInput) : User
        updateUser(_id: ID, input: UserEdit): User
    }

    type User{
        _id: ID
        numeroDocumento: String!
        nombre: String!
        correo: String!
        contrasena: String!
        tipoUsuario: String!
        estado: Boolean
    }

    input UserInput{
        numeroDocumento: String!
        nombre: String!
        correo: String!
        contrasena: String!
        tipoUsuario: String!
        estado: Boolean
    }

    input UserEdit{
        numeroDocumento: String
        nombre: String
        correo: String
        contrasena: String
        tipoUsuario: String
        estado: Boolean
    }
`;

module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

 

