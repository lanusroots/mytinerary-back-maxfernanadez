import User from "../../models/User.js"

// CREATE
//Explicamos un poco el funcionamiento de CREATE
// req => es el objeto x el cual el cliente manda DATOS IMPORTANTES acerca d la petición
// Propiedades más importantes de REQ:
// BODY: objeto q se envía generalmente a través de formularios
// PARAMS (parametros): suelen ser estáticos como el ID de una city a buscar
// QUERIES (consultas): son opcionales y nos indican algunas consultas - filtros - modos de ver la info

export default async (req, res) => {
    try {
      let newUser = await User.create(req.body)
    return res.status(201).json({
      success: true,
      message: 'User created',
      response: newUser._id
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Not created',
        response: null
      })
    }
  }