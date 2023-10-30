import React from "react";
import "./Home.css";
import Hero from "./Hero";
import SectionOne from "../../components/SectionOne/SectionOne";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionOne />
      <Footer />
    </>
  );
}
