export default (schema) => [
  (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false })
    if (validation.err) {
      return res.status(400).json({
        success: false,
        messages: validation.error.details.map((err) => err.message)
      })
    }
    return next()
  }
]
