const  mongoose = require("mongoose"); 

    mongoose.connect('mongodb+srv://dianaflorez2000:Madaca23@ciclo4fullstackdevs.lr6gb.mongodb.net/GestionProyectosDB?retryWrites=true&w=majority')
    //mongoose.connect('mongodb://localhost/mongodbgraphql')
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));

    

