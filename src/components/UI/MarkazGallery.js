import React from "react";

import ModalImage from "react-modal-image";
import pic1 from "./MarkazGallery/1.jpg";
import pic2 from "./MarkazGallery/2.jpg";
import pic3 from "./MarkazGallery/3.jpg";
import pic4 from "./MarkazGallery/4.jpg";
import pic5 from "./MarkazGallery/5.jpg";
import pic6 from "./MarkazGallery/6.jpg";
import pic7 from "./MarkazGallery/7.jpg";
import pic8 from "./MarkazGallery/8.jpg";

export default function MarkazGallery() {
  return (
    <div style={{ background: "#172b4d", padding: "40px 15px" }}>
      <div className="row p-1">
        <div className="col-3">
          <ModalImage small={pic1} large={pic1} />
        </div>
        <div className="col-3">
          <ModalImage small={pic2} large={pic2} />
        </div>
        <div className="col-3">
          <ModalImage small={pic3} large={pic3} />
        </div>
        <div className="col-3">
          <ModalImage small={pic4} large={pic4} />
        </div>
      </div>

      <div className="row p-1">
        <div className="col-3">
          <ModalImage small={pic5} large={pic5} />
        </div>
        <div className="col-3">
          <ModalImage small={pic6} large={pic6} />
        </div>
        <div className="col-3">
          <ModalImage small={pic7} large={pic7} />
        </div>
        <div className="col-3">
          <ModalImage small={pic8} large={pic8} />
        </div>
      </div>
    </div>
  );
}
