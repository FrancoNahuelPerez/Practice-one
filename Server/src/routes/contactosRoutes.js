const { Router } = require("express");
const {postContactosHandler,
getAllContactosHandler,
putContactosHandler} = require("../handlers/contactosHandler");
const contactosRouter = Router();

contactosRouter.post("/", postContactosHandler);
contactosRouter.get('/', getAllContactosHandler)
contactosRouter.put('/:id',putContactosHandler)


module.exports = contactosRouter;
