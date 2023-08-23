import User from "../../models/User.js"

export default async (req, res) => {
    try {
      let allUsers = await User.find()
    return res.status(200).json({
      success: true,
      message: 'User found',
      response: allUsers
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'User not found',
        response: null
      })
    }
  }