import Activity from "../../models/Activity.js"

export default async (req, res) => {
    try {
      let allActivities = await Activity.find()
    return res.status(200).json({
      success: true,
      message: 'Activity found',
      response: allActivities
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Activity not found',
        response: null
      })
    }
  }