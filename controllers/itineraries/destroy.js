import Itinerary from "../../models/Itinerary.js"

export default async (req, res) => {
    try {
      let deleteItinerary = await Itinerary.findByIdAndDelete(req.params.itinerary_id)
    return res.status(200).json({
      success: true,
      message: 'Itinerary deleted',
      response: deleteItinerary._id
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Itinerary not deleted',
        response: null
      })
    }
  }