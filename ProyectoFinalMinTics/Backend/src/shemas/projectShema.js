const  { makeExecutableSchema } =  require("graphql-tools");
const  resolvers  =  require("../resolvers/projectResolvers");


const typeDefs = `

    scalar Date

    type Query{
        hello: String
        Projects: [Project]
        projectById(_id: ID): Project
    }

    type Mutation {
        createProject(input: ProjectInput) : Project
        updateProject(_id: ID, input: ProjectEdit): Project
    }

    input ProjectEdit{
        nombreProyecto: String
        objetivoGeneral: String
        objetivosEspecificos: [objetivoIn]
        presupuesto: Int
        fechaInicio: Date
        fechaFin:  Date
        inscritos: [InscritosIn]
        estado: Boolean
        fase: String
        Avance: [avanceIn]
    }

    input ProjectInput{
        nombreProyecto: String!
        objetivoGeneral: String!
        objetivosEspecificos: [objetivoIn]
        presupuesto: Int!
        fechaInicio: Date
        fechaFin:  Date
        inscritos: [InscritosIn]
        estado: Boolean
        fase: String
        Avance: [avanceIn]
    }

    input InscritosIn{
        id: ID
        rol: String!
   }

   input avanceIn{
       especificacion: String
       observacion: String
       fecha: Date 
       idUsuario: ID
  }

  input  objetivoIn{
    objetivo: String! 
  }
  

    type Project{
        _id: ID
        nombreProyecto: String!
        objetivoGeneral: String!
        objetivosEspecificos: [objetivo]
        presupuesto: Int!
        fechaInicio:  Date
        fechaFin:  Date
        inscritos: [Inscritos]
        estado: Boolean
        fase: String
        Avance: [avance]
    }

    type Inscritos{
        id: ID
        rol: String!
   }

   type avance{
       especificacion: String
       observacion: String
       fecha: Date 
       idUsuario: ID
  }

  type  objetivo{
    objetivo: String! 
  }
   

`;

module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});
