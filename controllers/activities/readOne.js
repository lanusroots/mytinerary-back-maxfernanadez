import Activity from "../../models/Activity.js"

export default async (req, res) => {
    try {
      let oneActivity = await Activity.findOne({ _id: req.params.activity_id }).select('mail photo -_id')          // Busca según el objeto de condiciones (id - email - name - etc)
      //let oneActivityId = await Activity.findById(req.params.activity_id)                                       // Busca solamente x id
    return res.status(200).json({
      success: true,
      message: 'Activity found',
      response: oneActivity
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Activity not found',
        response: null
      })
    }
  }