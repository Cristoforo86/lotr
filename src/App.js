import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Styles
import "./App.css";

//Components
import Header from "./components/Header";
import People from "./components/People";
import PeopleList from "./components/PeopleList";

//Redux
import { useDispatch } from "react-redux";
import { fetchPeople } from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/people" exact component={People} />
          <Route path="/people/:id" exact component={PeopleList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
