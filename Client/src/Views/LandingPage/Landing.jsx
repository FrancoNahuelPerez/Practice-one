import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
export default function Landing() {
  return (
    <div>
      <div>
        <h1>Pantalla de carga</h1>
      </div>
      <Link to='/home'>
        <button>Home</button>
      </Link>
    </div>
  );
}
