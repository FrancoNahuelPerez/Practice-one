import React, { useState } from "react";
import validations from "./validation";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <div>
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Insert Nombre..."
          value={form.name}
          onChange={changeHandler}
        ></input>
        <label htmlFor="phone">Numero</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Insert Numero..."
          value={form.phone}
          onChange={changeHandler}
        ></input>
      </form>
    </div>
  );
}
