import City from "../../models/City.js"

export default async (req, res, next) => {
    try {
      let updateCity = await City.findByIdAndUpdate(
        req.params.city_id,
        req.body,
        { new:true }  //Este parametro es opcional y por defecto viene FALSE y devuelve el objeto antes de modificarlo - al cambiarlo a TRUE devuelve el objeto modificado
      ).select('name photo mail')
      if (updateCity) {
        return res.status(200).json({
          success: true,
          message: 'City updated',
          response: updateCity
        })
      } else {
        return res.status(400).json({
          success: false,
          message: 'City not updated',
          response: null
        })
      }
    } catch (err) {
      next(err)
    }
  }