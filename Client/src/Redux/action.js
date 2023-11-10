import axios from "axios";
import {
  GET_CONTACTOS,
  DEL_CONTACTOS,
  POST_CONTACTOS,
  GET_CONTACTOS_ID,
  PUT_CONTACTOS,
  POST_USUARIOS,
} from "./actionType";

export const postUsuarios = () => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/contactos/", {...props});
      alert("Contacto agregado Exitosamente");
      dispatch({ type: POST_CONTACTOS, payload: response.data });
    } catch (error) {
      alert(console.log(error))
    }
  };
};


export const putContactos = (id, payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `http://localhost:3001/contactos/edit/${id}`,
        payload
      );
      dispatch({ type: PUT_CONTACTOS, payload: response.data });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };
};

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
      const eliminar = await axios.delete(
        `http://localhost:3001/contactos/${id}`
      );
      dispatch({ type: DEL_CONTACTOS, payload: eliminar.data });
    } catch (error) {
      alert("Error al eliminar el contacto");
    }
  };
};

export const postContactos = (props) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/contactos/", {
        ...props,
      });
      alert("Contacto agregado Exitosamente");
      dispatch({ type: POST_CONTACTOS, payload: response.data });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("El contacto no se ha podido crear");
      }
    }
  };
};

export const getContactosId = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/contactos/${id}`);
      dispatch({ type: GET_CONTACTOS_ID, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
