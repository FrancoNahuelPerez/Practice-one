const {getAllUsers, postUser} = require('../controllers/usuariosController')

const getAllUsersHandler = async(require,response) =>{
    try {
        const foundUsers = await getAllUsers();
        response.status(200).json(foundUsers)
    } catch (error) {
        response.status(400).json({error:error.message})
    }
}


const postUserHandler = async(require,response) =>{
    const {username,password} = require.body
    try {
        const newUser = await postUser({username, password});
        response.status(200).json(newUser)
    } catch (error) {
        response.status(400).json({error:error.message})
    }
}


module.exports = {
    postUserHandler,
    getAllUsersHandler
}