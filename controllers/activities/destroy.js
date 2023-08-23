import Activity from "../../models/Activity.js"

export default async (req, res) => {
    try {
      let deleteActivity = await Activity.findByIdAndDelete(req.params.activity_id)
    return res.status(200).json({
      success: true,
      message: 'Activity deleted',
      response: deleteActivity._id
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Activity not deleted',
        response: null
      })
    }
  }