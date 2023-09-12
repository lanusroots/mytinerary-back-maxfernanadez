import Activity from "../../models/Activity.js"

export default async (req, res, next) => {
  try {
    let deleteActivity = await Activity.findByIdAndDelete(
      req.params.activity_id
    )
    if (deleteActivity) {
      return res.status(200).json({
        success: true,
        message: "Activity deleted",
        response: deleteActivity.name
      })
    } else {
      return res.status(404).json({
        success: false,
        message: "not found",
        response: null
      })
    }
  } catch (err) {
    next(err)
  }
}
