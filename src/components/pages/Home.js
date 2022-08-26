import React from "react";
import MarkazGallery from "../UI/MarkazGallery";
import ServicesCard from "../UI/ServicesCard";
import Slider from "../UI/Slider";

export default function Home(props) {
  document.title = "PKM Punjab";
  return (
    <>
      <Slider {...props.changeProgress(20)} />
      <ServicesCard {...props.changeProgress(50)} />
      <MarkazGallery {...props.changeProgress(100)} />
    </>
  );
}
