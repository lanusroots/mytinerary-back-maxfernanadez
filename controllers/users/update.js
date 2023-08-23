import User from "../../models/User.js"

export default async (req, res) => {
    try {
      let updateUser = await User.findByIdAndUpdate(
        req.params.user_id,
        req.body,
        { new:true }  //Este parametro es opcional y por defecto viene FALSE y devuelve el objeto antes de modificarlo - al cambiarlo a TRUE devuelve el objeto modificado
      ).select('name photo mail')
    return res.status(200).json({
      success: true,
      message: 'User updated',
      response: updateUser
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'User not updated',
        response: null
      })
    }
  }