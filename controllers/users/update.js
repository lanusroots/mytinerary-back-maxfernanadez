import User from "../../models/User.js"

export default async (req, res, next) => {
  try {
    let updateUser = await User.findByIdAndUpdate(
      req.params.user_id, 
      req.body, 
      { new: true }
    ).select("name photo mail")
    return res.status(200).json({
      success: true,
      message: "User updated",
      response: updateUser,
    })
  } catch (err) {
    next(err)
  }
}
