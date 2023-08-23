import Itinerary from "../../models/Itinerary.js"

export default async (req, res) => {
    try {
      let allItineraries = await Itinerary.find()
    return res.status(200).json({
      success: true,
      message: 'Itinerary found',
      response: allItineraries
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Itinerary not found',
        response: null
      })
    }
  }