import Itinerary from "../../models/Itinerary.js"

export default async (req, res, next) => {
  try {
    let deleteItinerary = await Itinerary.findByIdAndDelete(
      req.params.itinerary_id
    )
    return res.status(200).json({
      success: true,
      message: "Itinerary deleted",
      response: deleteItinerary.name,
    })
  } catch (err) {
    next(err)
  }
}
