import React from 'react'
import styles from './Contactos.module.css'

export default function Contactos({name, phone}) {
  return (
    <div className={styles.card}>
        <h3 className={styles.name}>{name}</h3>
        <p>{phone}</p>

    </div>
  )
}
