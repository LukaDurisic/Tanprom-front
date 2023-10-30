import React from "react";
import "./Items.css";

interface Card {
  name: string;
  price: number;
  manufacturer: string;
  available: number;
}

export default function Items(props: Card) {
  const card = {
    name: props.name,
    price: props.price,
    manufacturuer: props.manufacturer,
    available: props.available,
  };

  return (
    <div className="item">
      <div className="img" />
      <div className="description">
        <h3 className="name">{card.name}</h3>
        <h3 className="price">Price: {card.price}</h3>
        <h4 className="manufacturer">Manufacturer: {card.manufacturuer}</h4>
        <p className="available">Available: {card.available}</p>
      </div>
    </div>
  );
}
