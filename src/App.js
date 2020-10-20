import React from "react";

import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import LoginIn from "./components/Login/Login";

import "./App.css";



class App extends React.Component {

  render() {
    
    return (
      <Switch>
        <Route  exact path='/' render={()=><LoginIn/>}/>
        <Route path='/profile' render={()=><Profile/>}/>

      </Switch>
    );
  }
}


export default App;
