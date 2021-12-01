const { Schema, model} =  require('mongoose');

const userShema = new Schema({
    numeroDocumento: {
                     type: String,
                     required: true,
                     unique: true
    },
    nombre:{
            type: String,
            required: true 
    },
    correo:{
            type: String,
            required: true
    },
    contrasena:{
            type: String,
            required: true 
    },
    tipoUsuario:{
            type: String,
            required: true
    },
    estado:{
            type: Boolean, 
            required: true,
            default: false
    }
},{
    timestamps: true
});


//Mongo crea por debajo una coleccion lalmada usuarios
module.exports = model('Usuario',userShema);