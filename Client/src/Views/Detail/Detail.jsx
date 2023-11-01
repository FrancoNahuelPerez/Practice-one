import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getContactosId, getContactos} from "../../Redux/action";

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

  return (
    <div>
      <h4>Contacto: {contactos?.name}</h4>
      <h4>Numero: {contactos?.phone}</h4>
    </div>
  );
}
