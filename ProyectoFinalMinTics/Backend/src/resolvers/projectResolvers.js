const Proyecto = require("../models/Proyecto"); 

const resolvers = {
    Query: {
        hello: () => {
            return  'Bienvenido a la programacion GraphQL'
        }, 
        async Projects(){
            return  await Proyecto.find();            
        },
        async projectById( _, { _id } )  
        {
            return await Proyecto.findById(_id);
        }
    },
    Mutation: {
        async createProject(_, { input } ){
            const newProject = new Proyecto(input);
            await newProject.save();
            return newProject;
        },
        async updateProject(_, { _id,input }){
            return  await Proyecto.findByIdAndUpdate(_id,input , {new:true});
        }
    }
};

module.exports = resolvers;