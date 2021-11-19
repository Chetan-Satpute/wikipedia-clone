import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const Footer: FC = () => {
  const [showMore, setShowMore] = useState(false);

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
      <button
        className={`flex-auto text-center ${
          page === "/saved" ? "text-base90" : ""
        }`}
      >
        <Link to="saved">
          <span className="material-icons">bookmark</span>
          <p className="text-xs">Saved</p>
        </Link>
      </button>
      <button
        className={`flex-auto text-center ${
          page === "/search" ? "text-base90" : ""
        }`}
      >
        <Link to="search">
          <span className="material-icons">search</span>
          <p className="text-xs">Search</p>
        </Link>
      </button>
      <button
        className={`flex-auto text-center ${
          page === "/edits" ? "text-base90" : ""
        }`}
      >
        <Link to="edits">
          <span className="material-icons">edit</span>
          <p className="text-xs">Edits</p>
        </Link>
      </button>
      <button
        className="flex-auto text-center"
        onClick={() => setShowMore(true)}
      >
        <span className="material-icons">dehaze</span>
        <p className="text-xs">More</p>
      </button>

      {showMore && (
        <div className="absolute bg-black bg-opacity-60 top-0 h-screen w-screen z-10 left-0 flex flex-col">
          <div className="flex-auto" onClick={() => setShowMore(false)}></div>
          <ul className="bg-base14">
            <li>
              <button className="w-full p-3 flex bg-base20 text-blue-400 font-semibold text-sm items-center">
                <span className="material-icons">login</span>
                <span className="flex-auto text-left px-5">LOG IN / JOIN WIKIPEDIA</span>
              </button>
            </li>
            <li>
              <button className="w-full p-3 flex">
                <span className="material-icons">settings</span>
                <span className="flex-auto text-left px-5 text-white">Settings</span>
              </button>
            </li>
            <li>
              <button className="w-full p-3 flex">
                <span className="material-icons">favorite</span>
                <span className="flex-auto px-5 text-left text-white">Donate</span>
                <span className="material-icons">open_in_new</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Footer;
