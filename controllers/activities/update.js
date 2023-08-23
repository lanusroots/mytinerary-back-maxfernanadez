import Activity from "../../models/Activity.js"

export default async (req, res) => {
    try {
      let updateActivity = await Activity.findByIdAndUpdate(
        req.params.activity_id,
        req.body,
        { new:true }     //Este parametro es opcional y por defecto viene FALSE y devuelve el objeto antes de modificarlo - al cambiarlo a TRUE devuelve el objeto modificado
      ).select('name photo mail')
    return res.status(200).json({
      success: true,
      message: 'Activity updated',
      response: updateActivity
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Activity not updated',
        response: null
      })
    }
  }