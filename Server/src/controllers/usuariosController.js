const {Usuarios} = require('../db')
// "UsuarioId agregar para poder conectar la cuenta a cada usuario
const postUser = async({username, password}) =>{
    const found = await Usuarios.findOne({where:{username}})

    if(found){
        throw new Error('El nombre de usuario no esta disponible')
    }
    const newUser = await Usuarios.create({username, password})
    return newUser
}

const getAllUsers = async()=>{
    const foundUser = await Usuarios.findAll()
    return foundUser
}


module.exports = {
    postUser,
    getAllUsers
}