import City from "../../models/City.js"

export default async (req, res, next) => {
    try {
      let oneCity = await City.findOne({ _id: req.params.city_id })                                    // Busca según el objeto de condiciones (id - email - name - etc)
      //let oneCityId = await City.findById(req.params.city_id)                                       // Busca solamente x id
      if (oneCity) {
        return res.status(200).json({
          success: true,
          message: 'City found',
          response: oneCity
        })
      } else {
        return res.status(400).json({
          success: false,
          message: 'City not found',
          response: null
        })
      }
    } catch (err) {
      next(err)
    }
  }