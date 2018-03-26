import React, { Component } from 'react';
import App from './components/App';
import Clients from './components/clients';
import Home from './components/home';
import Blabla from './components/blabla';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class RoutesApp extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <App>
            <Route path="/" exact component={Home} />
            <Route path="/clients" component={Clients} />
            <Route path="/blabla" component={Blabla} />
          </App>
        </Switch>
      </Router>
    );
  }
}

export default RoutesApp;
