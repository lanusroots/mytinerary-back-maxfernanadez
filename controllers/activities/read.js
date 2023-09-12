import Activity from "../../models/Activity.js"

export default async (req, res, next) => {
  try {
    let search = {}

    if (req.query.itinerary_id) {
      search.itinerary_id = req.query.itinerary_id
    }

    let allActivities = await Activity.find(
      search,
      "name photo itinerary_id"
    ).populate("itinerary_id", "name city_id")

    if (allActivities.length > 0) {
      return res.status(200).json({
        success: true,
        message: `${allActivities.length} activities found`,
        response: allActivities
      })
    } else {
      return res.status(404).json({
        success: false,
        message: "Activities not found",
        response: null
      })
    }
  } catch (err) {
    next(err)
  }
}
