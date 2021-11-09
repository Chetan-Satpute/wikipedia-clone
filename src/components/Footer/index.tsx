import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const Footer: FC = () => {
  const location = useLocation();
  const page = location.pathname;

  return (
    <div className="flex p-2 bg-base18 text-base50">
      <button
        className={`flex-auto text-center ${page === "/" ? "text-base90" : ""}`}
      >
        <Link to="/">
          <span className="material-icons">language</span>
          <p className="text-xs">Explore</p>
        </Link>
      </button>
      <button className={`flex-auto text-center ${page === "/saved" ? "text-base90" : ""}`}>
        <Link to="saved">
          <span className="material-icons">bookmark</span>
          <p className="text-xs">Saved</p>
        </Link>
      </button>
      <button className={`flex-auto text-center ${page === "/search" ? "text-base90" : ""}`}>
        <Link to="search">
          <span className="material-icons">search</span>
          <p className="text-xs">Search</p>
        </Link>
      </button>
      <button className={`flex-auto text-center ${page === "/edits" ? "text-base90" : ""}`}>
        <Link to="edits">
          <span className="material-icons">edit</span>
          <p className="text-xs">Edits</p>
        </Link>
      </button>
      <button className="flex-auto text-center">
        <span className="material-icons">dehaze</span>
        <p className="text-xs">More</p>
      </button>
    </div>
  );
};

export default Footer;
