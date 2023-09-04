import Activity from "../../models/Activity.js"

export default async (req, res, next) => {
  try {
    let updateActivity = await Activity.findByIdAndUpdate(
      req.params.activity_id,
      req.body,
      { new: true }
    ).select("name")
    res.status(200).json({
      success: true,
      message: "Activity updated",
      response: updateActivity,
    })
  } catch (err) {
    next(err)
  }
}
