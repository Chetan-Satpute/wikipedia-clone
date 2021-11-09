import React, { FC } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Smartphone from "./components/Smartphone/smartphone";
import useScreenSize from "./components/useScreenSize";
import "./styles/index.css";

const Root: FC = () => {
  const [width, height] = useScreenSize();

  // return ( <> {width < 800 || height < 800 ? ( <App />) : ( <div className="h-full flex justify-center items-center bg-green-400"> <Smartphone> <App /> </Smartphone> </div>)} </>);
  return <App />;
};

ReactDOM.render(<Root />, document.getElementById("root"));
