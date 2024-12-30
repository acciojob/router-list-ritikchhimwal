
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ItemList} />
        <Route path="/item/:id" component={ItemDetail} />
      </Switch>
    </Router>
  );
};

export default App;

