import Activity from "../../models/Activity.js"

export default async (req, res) => {
    try {
      let newActivity = await Activity.create(req.body)
    return res.status(201).json({
      success: true,
      message: 'Activity created',
      response: newActivity._id
    })
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        success: false,
        message: 'Not created',
        response: null
      })
    }
  }