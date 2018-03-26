import React, { Component } from 'react';
import Menu from './Menu';
import { withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  render() {
    return (
      <section className="app">
        <Menu />
        <Container>
          {this.props.children}
        </Container>
      </section>
    );
  }
}

export default App;
