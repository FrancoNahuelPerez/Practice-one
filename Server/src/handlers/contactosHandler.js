const {postContactos,
getAllContactos} = require('../controllers/contactosControllers')

const postContactosHandler = async(require,response) =>{
    const {name, phone} = require.body;
    try {
        const contacto = await postContactos({name,phone})
        response.status(200).json(contacto)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

const getAllContactosHandler = async (require,response) =>{
    try {
        const foundContactos = await getAllContactos();
        response.status(200).json(foundContactos)
    } catch (error) {
        response.status(400).json({error:error.message})
    }
}



module.exports = {
    postContactosHandler,
    getAllContactosHandler
}