const { response } = require('express');
const {postContactos,
getAllContactos,
putContactos,
deleteContacto,
contactoById} = require('../controllers/contactosControllers')

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

const putContactosHandler = async(require,response) =>{
    const {id} = require.params
    const {name, phone} = require.body
    try {
        const contacto = await putContactos({name, phone, id})
        response.status(200).json(contacto)
    } catch (error) {
        response.status(400).json({error:error.message})
    }
}

const deleteContactoHandler = async(require,response) =>{
    const {id} = require.params
    try {
        const deletee = await deleteContacto({id})
        response.status(200).json(deletee)
    } catch (error) {
        response.status(400).json({error:error.message})
    }
}

const contactoByIdHandler = async(require, response) =>{
    const {id} = require.params
    try {
        const searchId = await contactoById({id})
        response.status(200).json(searchId)
    } catch (error) {
        response.status(404).json({error:error.message})
    }
}


module.exports = {
    postContactosHandler,
    getAllContactosHandler,
    putContactosHandler,
    deleteContactoHandler,
    contactoByIdHandler
}