import User from "../../models/User.js"

export default async (req, res, next) => {
  try {
    let deleteUser = await User.findByIdAndDelete(req.params.user_id)
    return res.status(200).json({
      success: true,
      message: "User deleted",
      response: deleteUser._id,
    })
  } catch (err) {
    next(err)
  }
}
