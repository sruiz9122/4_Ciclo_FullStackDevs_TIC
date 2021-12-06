const { Schema, model} =  require('mongoose');

const proyectoShema = new Schema({
    nombreProyecto: { type: String, required: true, unique: true },
    objetivoGeneral: { type: String, required: true },
    objetivosEspecificos:  [{ 
                                objetivo: { type: String, required: true }
                            }],
    presupuesto: { type: Number, required: true },
    fechaInicio: { type: Date, required: true, default: Date.now },
    fechaFin: { type: Date },
    inscritos:  [{ 
                    id: { type: String, required: true },
                    rol: { type: String, required: true },
                    estado: { type: Boolean, default: false, required: true }
                }],
    estado: { type: Boolean, required: true, default: false },
    fase: { type: String, default: "Analisis" },  //Analisis, Inicio, Desarrollo, terminado 
    Avance:  [{ 
                    especificacion: { type: String },
                    observacion: { type: String }, 
                    fecha: { type: Date, required: true, default: Date.now },
                    idUsuario: { type: String, required: true }
             }]
},
{
    timestamps: true
});

//Mongo crea por debajo una coleccion lalmada usuarios
module.exports = model('Proyecto',proyectoShema);