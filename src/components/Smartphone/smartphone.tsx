import React, { FC } from "react";
import './style.css';

const Smartphone: FC = ({ children }) => {
  return (
    <div className="smartphone">
      <div className="content">{children}</div>
    </div>
  );
};

export default Smartphone;
