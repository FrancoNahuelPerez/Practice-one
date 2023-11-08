import React from "react";
import { useState } from "react";
import validations from "./validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './Form.module.css'


export default function Form() {
  const navigate = useNavigate()

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

const submitHanlder = (event) =>{
  event.preventDefault()

  const response = axios.post("http://localhost:3001/contactos/",form)
  if(response){
    alert("El contacto se ha agregado exitosamente")
    navigate('/home')
  }else{
    alert(error.response.data.error)
  }
}

  return (
    <div className={styles.container}>
      <form onSubmit={submitHanlder}>
        <h1>Agregar Contacto</h1>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
          placeholder="Insert Name..."
        />
        {error.name && <p>{error.name}</p>}
        <label htmlFor="phone">Numero:</label>
        <input
          id="phone"
          type="text"
          value={form.phone}
          onChange={changeHandler}
          name="phone"
          placeholder="Insert Number..."
        />
        {error.phone && <p>{error.phone}</p>}
        <button disabled={!form.name || !form.phone}>Agregar contacto</button>
      </form>
    </div>
  );
}
