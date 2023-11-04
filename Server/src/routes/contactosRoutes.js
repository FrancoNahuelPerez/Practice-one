const { Router } = require("express");
const {postContactosHandler,
getAllContactosHandler,
putContactosHandler,
deleteContactoHandler,
contactoByIdHandler} = require("../handlers/contactosHandler");
const contactosRouter = Router();

contactosRouter.post("/", postContactosHandler);
contactosRouter.get('/', getAllContactosHandler)
contactosRouter.put('edit/:id',putContactosHandler)
contactosRouter.delete('/:id', deleteContactoHandler)
contactosRouter.get('/:id', contactoByIdHandler)

module.exports = contactosRouter;
