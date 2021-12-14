import React from "react";
import Register from "./components/auth/signup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/login";
import AdminPage from "./components/home";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={AdminPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
