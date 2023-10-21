const { Router } = require("express");
const {postContactosHandler,
getAllContactosHandler} = require("../handlers/contactosHandler");
const contactosRouter = Router();

contactosRouter.post("/", postContactosHandler);
contactosRouter.get('/', getAllContactosHandler)


module.exports = contactosRouter;
