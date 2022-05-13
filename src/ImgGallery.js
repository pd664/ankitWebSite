import React from "react";
import "./static/imgGallery.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import ModalImage from "react-modal-image";
function ImgGallery() {
    
  return (
    <div className="d-flex flex-column">
        <div>
        <ModalImage small={img1} large={img1}/>;
        </div>
        <div>
            <div className="d-flex flex-row p-2">
                <ModalImage small={img2} large={img2}/>;
                <ModalImage small={img3} large={img3}/>;
                <ModalImage small={img4} large={img4}/>;
                <ModalImage small={img5} large={img5}/>;
            </div>
        </div>
    </div>

    
  );
}


export default ImgGallery;
