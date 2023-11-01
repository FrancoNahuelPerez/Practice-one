import React from "react";
import styles from "./Contactos.module.css";
import { Link } from "react-router-dom";

export default function Contactos({ name, phone, id }) {
  return (
    <div className={styles.card}>
      <Link to={`/detail/${id}`}>
        <h3 className={styles.name}>{name}</h3>
      </Link>
      <p>{phone}</p>
    </div>
  );
}
