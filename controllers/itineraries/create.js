import Itinerary from "../../models/Itinerary.js"

export default async (req, res) => {
    try {
      let newItinerary = await Itinerary.create(req.body)
    return res.status(201).json({
      success: true,
      message: 'Itinerary created',
      response: newItinerary._id
    })
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        success: false,
        message: 'Itinerary not created',
        response: null
      })
    }
  }