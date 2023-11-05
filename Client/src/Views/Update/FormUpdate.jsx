import React, { useState } from "react";
import validations from "./validation";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactosId, putContactos, getContactos } from "../../Redux/action";

export default function FormUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contactosId = useSelector((state) => state.contactosID);
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getContactosId(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (contactosId) {
      setForm({
        name: contactosId.name,
        phone: contactosId.phone,
      });
    }
    return () => {
      setForm({
        name: "",
        phone: "",
      });
    };
  },[contactosId]);

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setError(
      validations({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };
  const submitHanlder = (event) => {
    event.preventDefault();
    dispatch(putContactos(id, form));
    alert("Contacto actualizado exitosamente");
    dispatch(getContactos);
    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={submitHanlder}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insert Nombre..."
          value={form.name}
          onChange={changeHandler}
        ></input>
        {error.name && <p>{error.name}</p>}
        <label htmlFor="phone">Numero</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Insert Numero..."
          value={form.phone}
          onChange={changeHandler}
        ></input>
        {error.phone && <p>{error.phone}</p>}
        <button disabled={!form.name || !form.phone
        }> Editar contacto</button>
      </form>
    </div>
  );
}
