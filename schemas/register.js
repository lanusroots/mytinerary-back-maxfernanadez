import joi from "joi"

const registerSchema = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "string.min": "Name must have at least 3 characters please!",
    "string.max": "Name must be less than 21 characters please!",
    "any.required": "Name is required",
    "string.empty": "Name is required"
  }),
  lastName: joi.string().empty("").min(3).max(20).messages({
    "string.min": "Last name must have at least 3 characters please!",
    "string.max": "Last name must be less than 21 characters please!"
  }),
  mail: joi.string().required().email().messages({
    "string.email": "Invalid email address format",
    "any.required": "Email is required",
    "string.empty": "Email is required"
  }),
  photo: joi.string().uri().empty("").messages({
    "string.uri": "INVALID_URL"
  }),
  password: joi.string().required().alphanum().min(8).max(20).messages({
    "string.alphanum": "Password must be alphanumeric",
    "string.min": "Password must have at least 8 characters please!",
    "string.max": "Password must be less than 21 characters please!",
    "any.required": "Password is required"
  }),
  country: joi.string().required()
})

export default registerSchema
