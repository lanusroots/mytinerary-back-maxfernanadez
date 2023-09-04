import { model, Schema, Types } from "mongoose"

let collection = "cities"
let schema = new Schema({
  country: { type: String, required: true },
  fundation: { type: Date, required: true },
  population: { type: Number },
  photo: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, default: "Edit later" },
  smalldescription: { type: String, default: "Edit later" },
  featuredLocation: { type: String, default: "Edit later" },
  admin_id: { type: Types.ObjectId, required: true, ref: "users" },
}) //Para establecer una relacion de datos en mongo es necesario REFERENCIAR el dato hacia la COLECCIÓN con la q quiero RELACIONARME (ref:'coleccion a ralacionarse')

let City = model(collection, schema)

export default City
