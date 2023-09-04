import { model, Schema } from "mongoose"

//lo 1ro q necesitamos crear es el espacio virtual donde se guardarán todos los documentos/modelos
//es decir, la COLECCIÓN (conjunto de documentos - modelos de datos)

let collection = "users"

//Definir el SCHEMA de datos del modelo
//es decir, el MOLDE - FORMA q tiene q tener mi modelo de datos

let schema = new Schema({
  name: { type: String, required: true }, //por DEFAULT todos los datos son opcionales, es decir q 'required: false'
  lastName: { type: String }, //este caso es opcional x lo tanto no necesito establecer el 'required'
  mail: { type: String, required: true, unique: true }, //para obligar a q mail sea único se usa 'unique: true' (evita emails DUPLICADOS)
  photo: {
    type: String, //DEFAULT: 'hace q si el cliente no especifica una foto, x DEFAULT se va a utilizar esta img
    default:
      "https://www.insst.es/documents/20197/690715/no-image.png/7167f7aa-044e-77b0-2b24-40bef8315294?t=1688741710882",
  },
  password: { type: String, required: true },
  country: { type: String, required: true },
})

//Para crear un modelo de datos utilizo el método 'model(DONDE, FORMA)'
//pasando como parámetros DONDE tengo q crear los documentos y con q FORMA

let User = model(collection, schema)

export default User
