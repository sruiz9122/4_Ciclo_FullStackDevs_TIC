const User = require("../models/Usuario"); 

 const resolvers = {
    Query: {
        hello: () => {
            return  'Bienvenido a la programacion GraphQL'
        },
        async Users(){
            return  await User.find();            
        }, 
        async userById( _, { _id } )  
        {
            return await User.findById(_id);
        },
        async login(_, { correo, contrasena })
        {
            return await User.findOne({ 'correo': correo , "contrasena": contrasena , "estado": true });
        },
        async userBytype( _, { tipoUsuario } )  
        {
            return await User.find({'tipoUsuario': tipoUsuario});
        }
    },
    Mutation: {
        async createUser(_, { input } ){
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        }, 
        async updateUser(_, { _id,input }){
            return  await User.findByIdAndUpdate(_id,input , {new:true});
        }
    }
};

module.exports = resolvers;