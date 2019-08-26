import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Styles
import "./App.css";

//Components
import Header from "./components/Header";
import People from "./components/People";
import PeopleList from "./components/PeopleList";
import PeopleListItem from "./components/PeopleListItem";

//Redux

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/people" exact component={People} />
          <Route path="/people/:id" exact component={PeopleListItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
