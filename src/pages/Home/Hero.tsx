import React from "react";
import img from "../../assets/porsche-model.png";
import "./Home.css";

export default function Hero() {
  return (
    <div className="hero">
      <img src={img} alt="hero" />
      <h1 className="hero-h1">Tanprom</h1>
      <p className="hero-p">Potpuno besplatni, sada i zauvijek!</p>
    </div>
  );
}
