import City from "../../models/City.js"

export default async (req, res) => {
    try {
      let deleteCity = await City.findByIdAndDelete(req.params.city_id)
    return res.status(200).json({
      success: true,
      message: 'City deleted',
      response: deleteCity._id
    })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'City not deleted',
        response: null
      })
    }
  }