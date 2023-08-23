import User from "../../models/User.js"

export default async (req, res) => {
    try {
      let deleteUser = await User.findByIdAndDelete(req.params.user_id)
    return res.status(200).json({
      success: true,
      message: 'User deleted',
      response: deleteUser._id
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'User not deleted',
        response: null
      })
    }
  }