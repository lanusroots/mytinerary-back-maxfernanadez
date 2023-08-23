import Itinerary from "../../models/Itinerary.js"

export default async (req, res) => {
    try {
      let oneItinerary = await Itinerary.findOne({ _id: req.params.itinerary_id }).select('mail photo -_id')          // Busca según el objeto de condiciones (id - email - name - etc)
      //let oneItineraryId = await Itinerary.findById(req.params.itinerary_id)                                       // Busca solamente x id
    return res.status(200).json({
      success: true,
      message: 'Itinerary found',
      response: oneItinerary
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Itinerary not found',
        response: null
      })
    }
  }