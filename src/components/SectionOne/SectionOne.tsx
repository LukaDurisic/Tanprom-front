import React from "react";
import Items from "./Items/Items";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Manufacturer {
  id: string;
  make: string;
  country: string;
  year: number;
}
interface Card {
  name: string;
  price: number;
  manufacturer: Manufacturer;
  available: number;
}

export default function SectionOne() {
  const [itemsData, setItemsData] = useState<Card[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/part/all")
      .then((response: AxiosResponse) => {
        setItemsData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="section-one">
      <h1>U ponudi</h1>
      <div className="items-container">
        {itemsData.map((item, index) => (
          <Items
            key={index}
            name={item.name}
            price={item.price}
            manufacturer={item.manufacturer.make}
            available={item.available}
          />
        ))}
      </div>
    </div>
  );
}
