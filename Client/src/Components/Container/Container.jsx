import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContactos } from "../../Redux/action";
import React from "react";
import Contactos from "../Contactos/Contactos";

export default function Container() {
  const contactos = useSelector((state) => state.contactos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactos());
  }, [dispatch]);

  return (
    <div>
      {contactos.map((contactitos, index) => {
        return (
          <Contactos
            key={index}
            name={contactitos.name}
            phone={contactitos.phone}
            id={contactitos.id}
          />
        );
      })}
    </div>
  );
}
