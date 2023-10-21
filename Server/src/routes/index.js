const { Router } = require("express");
const usuariosRouter = require('./usuariosRoutes')
const contactosRouter = require('./contactosRoutes')
const router = Router();

router.use('/contactos',contactosRouter)

module.exports = router;
