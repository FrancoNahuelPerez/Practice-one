import { GET_CONTACTOS, DEL_CONTACTOS } from "./actionType";

const initialState = {
    contactos : [],
    

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
            const contactoElminados = state.contactos.filter((contacto) => contacto.id !== deleteId)
            return{
                ...state,
                contactos: contactoElminados
            }
        default:
            return {...state}
    }
};
