import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContactosId, getContactos, delContactos} from "../../Redux/action";

export default function Detail() {
  const contactos = useSelector((state) => state.contactosID);
  console.log('contactos', typeof(contactos))
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactosId(id));
  }, [id, dispatch]);

  useEffect(() =>{
    dispatch(getContactos())
  })

  // const handleDelete = () => {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete this Pokémon?"
  //   );
  //   if (confirmed) {
  //     dispatch(deletePokemon(id));
  //     dispatch(fetchPokemons());
  //     alert("Pokemon deleted successfully");
  //     navigate("/pokemons");
  //   }
  // };


  const handleDelete = () => {
    const confirmed = window.confirm("Estas seguro que deseas eliminar este contacto?")
    if(confirmed){
      dispatch(delContactos(id))
      alert("Contacto eliminado exitosamente")
    }
  }


  return (
    <div>
      <h4>Contacto: {contactos?.name}</h4>
      <h4>Numero: {contactos?.phone}</h4>
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
