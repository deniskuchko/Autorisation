import React from "react";

import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";

import "./App.css";

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route path="/profile" render={() => <Profile />} />
        </Switch>
      </div>
    );
  }
}

export default App;
