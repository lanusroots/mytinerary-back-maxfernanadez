import Itinerary from "../../models/Itinerary.js"

export default async (req, res, next) => {
  try {
    let updateItinerary = await Itinerary.findByIdAndUpdate(
      req.params.itinerary_id,
      req.body,
      { new: true }
    ).select("name price duration")
    return res.status(200).json({
      success: true,
      message: "Itinerary updated",
      response: updateItinerary,
    })
  } catch (err) {
    next(err)
  }
}
