import User from "../../models/User.js"

export default async (req, res, next) => {
  try {
    let allUsers = await User.find()

    if (allUsers.length > 0) {
      return res.status(200).json({
        succes: true,
        message: "Users found",
        response: allUsers,
      })
    } else {
      return res.status(404).json({
        success: false,
        message: "Users not found",
        response: null,
      })
    }
  } catch (err) {
    next(err)
  }
}
