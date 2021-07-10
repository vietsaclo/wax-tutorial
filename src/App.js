import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    const ele = document.getElementById('ipl-progress-indicator');
    // remove from DOM
    ele.outerHTML = '';
  }

  render() {
    return (
      <Router>
        <div className='container'>
          body here!
        </div>
      </Router>
    );
  }
}

export default App;
