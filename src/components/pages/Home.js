import React from "react";
import MarkazGallery from "../UI/MarkazGallery";
import ServicesCard from "../UI/ServicesCard";
import Slider from "../UI/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <ServicesCard />
      <MarkazGallery />
    </div>
  );
}
