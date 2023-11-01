const { Contactos } = require("../db");

const postContactos = async ({ name, phone }) => {
  const found = await Contactos.findOne({ where: { phone } });
  if (found) {
    throw new Error("Ya existe un contacto con ese numero");
  }
  const newContacto = await Contactos.create({ name, phone });

  return newContacto;
};

const getAllContactos = async () => {
  const foundContactos = await Contactos.findAll();
  return foundContactos;
};

const putContactos = async ({ id, name, phone }) => {
  const contacto = await Contactos.findByPk(id);

  if (!contacto) {
    throw new Error("Contacto no encontrado");
  }

  contacto.name = name;
  contacto.phone = phone;

  await contacto.save();

  return contacto;
};

const deleteContacto = async ({ id }) => {
  const foundContacto = await Contactos.findByPk(id);

  if (foundContacto) {
    await Contactos.destroy({ where: { id } });
    return "Contacto eliminado exitosamente";
  } else {
    throw new Error("Contacto no encontrado");
  }
};

const contactoById = async({id}) =>{
  const searchId = await Contactos.findByPk(id)
  if(!searchId){
    throw new Error("No existe un contacto con ese id")
  }
  return searchId
}

module.exports = {
  postContactos,
  getAllContactos,
  putContactos,
  deleteContacto,
  contactoById
};
