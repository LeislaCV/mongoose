const { default: mongoose } = require('mongoose')
const manguito =require('mongoose') //llamar libreria
const url_db = 'mongodb://localhost:27017/utma' //enceder la libreria

mongoose.connect(url_db)
.then(() => {
    console.log('Conexion Exitosa')
})
.catch((err) => {
    console.log('No jalooo')
})

const alumnos_esqueletillo = new mongoose.Schema(
    {
        name: {
            type:String
        },
        apepat: {
            type:String 
        },
        apemat: {
        type:String
        },
        numerotel: {
            type:Number 
        }
    }
)

   const alumnos = new mongoose.model('Tabla de registro de alumnos', alumnos_esqueletillo)

   alumnos.create(
    {
        name: 'Lupita',
        apepat: 'Caldera',
        apemat: 'Velasco',
        numerotel: 4495126280
    }
   )