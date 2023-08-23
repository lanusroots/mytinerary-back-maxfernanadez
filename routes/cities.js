import express from 'express'
import create from '../controllers/cities/create.js'
import read from '../controllers/cities/read.js'
import carousel from '../controllers/cities/carousel.js'
import readOne from '../controllers/cities/readOne.js'
import update from '../controllers/cities/update.js'
import destroy from '../controllers/cities/destroy.js'

let router = express.Router()

// CREATE
router.post('/', create)

// READ
router.get('/', read),
router.get('/carousel', carousel)
router.get('/:city_id', readOne)

// UPDATE
router.put('/:city_id', update)

// DESTROY
router.delete('/:city_id', destroy)

export default router