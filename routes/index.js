import express from 'express'
//el enrutador principal va a llamar a TODOS los recursos y los va a enrutar
import usersRouter from './users.js'
import citiesRouter from './cities.js'
import activitiesRouter from './activities.js'
import itinerariesRouter from './itineraries.js'

let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' })
})
//obligo al enrutador principal a usar las rutas del enrutador del recurso user
router.use('/users', usersRouter)
router.use('/cities', citiesRouter)
router.use('/activities', activitiesRouter)
router.use('/itineraries', itinerariesRouter)

export default router
