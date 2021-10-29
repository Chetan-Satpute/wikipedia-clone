import React, { FC } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="h-full bg-blue-200">
      <Router basename="/">
        <Switch>
          <Route path="/" exact={true}>
            <h1>Wikipedia</h1>
            <Link to="/page">Page</Link>
          </Route>
          <Route path="/page" exact={true}>
            <Link to="/">
              <h1>home</h1>
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
