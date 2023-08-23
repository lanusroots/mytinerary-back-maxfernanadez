import Itinerary from "../../models/Itinerary.js"

export default async (req, res) => {
    try {
      let updateItinerary = await Itinerary.findByIdAndUpdate(
        req.params.itinerary_id,
        req.body,
        { new:true }     //Este parametro es opcional y por defecto viene FALSE y devuelve el objeto antes de modificarlo - al cambiarlo a TRUE devuelve el objeto modificado
      ).select('name photo mail')
    return res.status(200).json({
      success: true,
      message: 'Itinerary updated',
      response: updateItinerary
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Itinerary not updated',
        response: null
      })
    }
  }