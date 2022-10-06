import "./App.css";
import React, { Component }  from 'react';
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Index from "./Pages/Index";


// Reference official react-router-dom v5 docs for router help
// https://v5.reactrouter.com/web/guides/quick-start
function App() {
  const URL = "https://never-bored-couple-backend.herokuapp.com/"
  return(
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
