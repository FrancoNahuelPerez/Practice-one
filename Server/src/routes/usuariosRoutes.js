const {Router} = require('express');
const usuariosRouter = Router()
const {postUserHandler,
    getAllUsersHandler} = require('../handlers/usuariosHandler')


usuariosRouter.get('/',getAllUsersHandler)
usuariosRouter.post('/',postUserHandler)

module.exports = usuariosRouter