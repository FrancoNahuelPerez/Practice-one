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
    const foundContactos = await Contactos.findAll()
    return foundContactos
}

module.exports = {
  postContactos,
  getAllContactos
};
