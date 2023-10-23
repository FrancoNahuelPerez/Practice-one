const { Router } = require("express");
const {postContactosHandler,
getAllContactosHandler,
putContactosHandler,
deleteContactoHandler} = require("../handlers/contactosHandler");
const contactosRouter = Router();

contactosRouter.post("/", postContactosHandler);
contactosRouter.get('/', getAllContactosHandler)
contactosRouter.put('/:id',putContactosHandler)
contactosRouter.delete('/:id', deleteContactoHandler)


module.exports = contactosRouter;
