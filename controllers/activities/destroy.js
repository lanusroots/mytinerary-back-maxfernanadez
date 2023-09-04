import Activity from "../../models/Activity.js"

export default async (req, res, next) => {
  try {
    let deleteActivity = await Activity.findByIdAndDelete(
      req.params.activity_id
    )
    return res.status(200).json({
      success: true,
      message: "Activity deleted",
      response: deleteActivity.name,
    })
  } catch (err) {
    next(err)
  }
}
