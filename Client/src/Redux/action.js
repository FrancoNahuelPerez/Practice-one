import axios from "axios";
import { GET_CONTACTOS, DEL_CONTACTOS } from "./actionType";

export const getContactos = () => {
  return async function (dispatch) {
    try {
      const contactos = await axios.get("http://localhost:3001/contactos/");
      dispatch({ type: GET_CONTACTOS, payload: contactos.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const delContactos = (id) => {
  return async function (dispatch) {
    try {
      const eliminar = await axios.delete(`http://localhost:3001/contactos/${id}`);
      dispatch({ type: DEL_CONTACTOS, payload: eliminar.data });
    } catch (error) {
        alert('Error al eliminar el contacto')
    }
  };
};
