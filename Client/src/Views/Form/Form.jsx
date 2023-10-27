import React from "react";
import { useState } from "react";
import validations from "./validation";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [error, setError] = useState({});

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
    )
  };

  return (
    <div>
      <form>
        <h1>Agregar Contacto</h1>
        <label htmlFor="name">
          Nombre:
        </label>
        <input
        id="name"
        type="text"
        value={form.name}
        onChange={changeHandler}
        name="name"
        placeholder="Insert Name..."></input>
        <label htmlFor="phone">
          Numero:
        </label>
        <input
        id="phone"
        type="text"
        value={form.phone}
        onChange={changeHandler}
        name="phone"
        placeholder="Insert Number..."></input>
      </form>
    </div>
  );
}
