import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Edits from "./pages/Edits";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

const App: FC = () => {
  return (
    <div className="h-full bg-base14 flex flex-col">
      <Router basename="/">
        <Switch>
          <Route path="/" exact={true}>
            <Explore />
          </Route>
          <Route path="/saved" exact={true}>
            <Saved />
          </Route>
          <Route path="/search" exact={true}>
            <Search />
          </Route>
          <Route path="/edits" exact={true}>
            <Edits />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
