import City from "../../models/City.js"

export default async (req, res, next) => {
  try {
    let updateCity = await City.findByIdAndUpdate(
      req.params.city_id, 
      req.body, 
      { new: true }
    ).select("country city smalldescription")
    return res.status(200).json({
      success: true,
      message: "City updated",
      response: updateCity,
    })
  } catch (err) {
    next(err)
  }
}
