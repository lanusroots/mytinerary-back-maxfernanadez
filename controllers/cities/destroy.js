import City from "../../models/City.js"

export default async (req, res, next) => {
  try {
    let deleteCity = await City.findByIdAndDelete(req.params.city_id)
    return res.status(200).json({
      success: true,
      message: "City deleted",
      response: deleteCity.city,
    })
  } catch (err) {
    next(err)
  }
}
