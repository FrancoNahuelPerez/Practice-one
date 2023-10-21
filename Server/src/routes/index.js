const { Router } = require("express");
const usuariosRouter = require("./usuariosRoutes");
const contactosRouter = require("./contactosRoutes");
const router = Router();

router.use("/contactos", contactosRouter);
router.use("/user", usuariosRouter);

module.exports = router;
