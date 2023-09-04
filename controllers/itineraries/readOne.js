import Itinerary from "../../models/Itinerary.js"

export default async (req, res, next) => {
  try {
    let oneItinerary = await Itinerary.findById(req.paramas.itinerary_id).select(
      "name price duration"
    )

    if (oneItinerary) {
      return res.status(200).json({
        success: true,
        message: "Itinerary found",
        response: oneItinerary,
      })
    } else {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
        response: null,
      })
    }
  } catch (err) {
    next(err)
  }
}
