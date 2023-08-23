import User from "../../models/User.js"

export default async (req, res, next) => {
    try {
      let oneUser = await User.findOne({ _id: req.params.user_id })                                    // Busca según el objeto de condiciones (id - email - name - etc)
      //let oneUserId = await User.findById(req.params.user_id)                                       // Busca solamente x id
      if (oneUser){
        return res.status(200).json({
          success: true,
          message: 'User found',
          response: oneUser
        })
      } else {
        return res.status(400).json({
          success: false,
          message: 'User not found',
          response: null
        })
      }
    } catch (err) {
      next(err)
    }
  }