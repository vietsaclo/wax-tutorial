import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import { MenuComponent } from "./components/index";
import { MenuRouter } from './routers';

class App extends Component {

  componentDidMount() {
    const ele = document.getElementById('ipl-progress-indicator');
    // remove from DOM
    ele.outerHTML = '';
  }

  render() {
    return (
      <Router>
        <MenuComponent />
        <div className='container'>
          <div className='mt-3 mb-2 h1 text-center text-uppercase fw-bold'>wellcome waxjs demo</div>
          <p className='text-center'><a target='_blank' href='https://github.com/vietnq-dgh/wax-tutorial.git'>https://github.com/vietnq-dgh/wax-tutorial.git</a></p>
          <hr />
          <MenuRouter />
        </div>
      </Router>
    );
  }
}

export default App;
