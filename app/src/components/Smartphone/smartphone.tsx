import React, { FC } from "react";
import "./style.css";

const Smartphone: FC = ({ children }) => {
  return (
    <div className="md-iphone-5 md-black-device md-glare" >
      <div className="md-body">
        <div className="md-buttons"></div>
        <div className="md-front-camera"></div>
        <div className="md-top-speaker"></div>

        <div className="md-screen">{children}</div>

        <button className="md-home-button"></button>
      </div>
    </div>
  );
};

export default Smartphone;
