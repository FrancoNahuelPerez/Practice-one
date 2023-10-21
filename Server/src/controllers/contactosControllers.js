const { Contactos } = require("../db");

const postContactos = async ({ name, phone }) => {
  const found = await Contactos.findOne({ where: { phone } });
  if (found) {
    throw new Error("Ya existe un contacto con ese numero")
  }
  const newContacto = await Contactos.create({ name, phone });

  return newContacto;
};

const getAllContactos = async()=>{
    const found = await Contactos.findAll()
    return found
}

module.exports = {
  postContactos,
  getAllContactos
};
