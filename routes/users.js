import express from 'express'
import create from '../controllers/users/create.js'
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js'
import update from '../controllers/users/update.js'
import destroy from '../controllers/users/destroy.js'

let router = express.Router()

// TEORÍA:
// router.MÉTODO('/', FUNCIÓN)

// MÉTODO HTTP
//Crear => POST  - cada vez q realizo una petición POST, se creará un recurso
//Leer => GET  - cada vez q realizo una petición GET, se leerá un recurso
//Actualizar => PUT/PATCH  - cada vez q realizo una petición PUT/PATCH, se actualizará un recurso
//Eliminar => DELETE  - cada vez q realizo una petición DELETE, se eliminará un recurso

// CREATE
router.post('/', create)

// READ
router.get('/', read),
router.get('/:user_id', readOne)

// UPDATE
router.put('/:user_id', update)

// DESTROY
router.delete('/:user_id', destroy)

export default router
