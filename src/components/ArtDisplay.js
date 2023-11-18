import React from "react";
import "../styles/artdisplay.css";


const ArtDisplay = ({title, about ,img}) => {
  return (
    <div className="artWrap">
      <div className="imgWrap">
        <img src={img} alt="img" className="artImg" />
      </div>
      <div className="details">
        <h1>{title}</h1>
        <p>
          {about}
        </p>
      </div>
    </div>
  );
};

export default ArtDisplay;
