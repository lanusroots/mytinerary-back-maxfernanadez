import Itinerary from "../../models/Itinerary.js"

export default async (req, res, next) => {
  try {
    let updateItinerary = await Itinerary.findByIdAndUpdate(
      req.params.itinerary_id,
      req.body,
      { new: true }
    ).select("name price duration")
    if (updateItinerary) {
      return res.status(200).json({
        success: true,
        messege: "Itinerary updated",
        response: updateItinerary
      })
    } else {
      return res.status(404).json({
        success: false,
        messege: "Itinerary not found",
        response: null
      })
    }
  } catch (err) {
    next(err)
  }
}
