import React from "react";
import slideshowServices from "../UI/OtherImages/slideshowServices.png";
import ServicesSlider from "../UI/ServicesSlider";
import ReactAudioPlayer from "react-audio-player";
import formServices from "../UI/OtherImages/formServices.png";
import test from "./test.mp3";
import testimg from "../UI/SliderImages/bg1.jpg";
import ServicesForm from "./ServicesForm";

function ServicesAccordion(props) {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <img src={slideshowServices} width="5.5%" alt="Slideshow logo" />
            <h2 className="px-3">Visual Information</h2>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse show"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ServicesSlider img1={testimg} img2={testimg} img3={testimg} />
            <ReactAudioPlayer className="mt-4" src={test} controls />
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <img src={formServices} className="mx-2" width="5%" alt="Form logo" />
            <h2 className="px-3">Submit Form</h2>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ServicesForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesAccordion;
