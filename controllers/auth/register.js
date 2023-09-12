import User from "../../models/User.js"

export default async (req, res, next) => {
  try {
    let one = await User.create(req.body)
    return res.status(201).json({
      success: true,
      message: "User created",
      response: one._id
    })
  } catch (err) {
    next(err)
  }
}
