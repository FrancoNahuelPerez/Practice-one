import { GET_CONTACTOS, DEL_CONTACTOS, POST_CONTACTOS, GET_CONTACTOS_ID, PUT_CONTACTOS,POST_USUARIOS } from "./actionType";

const initialState = {
    contactos : [],
    contactosID: [],
    usuarios: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTOS:
            return{
                ...state,
                contactos: action.payload
            }
        case DEL_CONTACTOS:
            const deleteContacto = action.payload.id
            const contactoElminados = state.contactos.filter((contacto) => contacto.id !== deleteContacto)
            return{
                ...state,
                contactos: contactoElminados
            }
        case POST_CONTACTOS:
            return{
                ...state,
                contactos: [...state.contactos, action.payload]
            }
        case GET_CONTACTOS_ID:
            return{
                ...state,
                contactosID: action.payload
            }
        case PUT_CONTACTOS:
            return{
                ...state,
                contactos: action.payload
            }
        case POST_USUARIOS:
            return{
                ...state,
                usuarios: action.payload
            }
        default:
            return {...state}
    }
};
export default rootReducer