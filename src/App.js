import React , { Component } from 'react';
import { Provider  } from "react-redux";
import { BrowserRouter as Router,Route} from "react-router-dom";
import store from "./store";
import Home from "./components/Home";
import Game from "./components/game";

let MyContext;

export default class App extends Component {
  render() {
  return (
        <Provider store={store} context={MyContext}>
        <Router>  
        <div className="App">

        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />

        </div>
          </Router>  
          </Provider>
  );
}
}