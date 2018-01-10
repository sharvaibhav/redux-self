import React, { Component } from 'react';
import {createStore} from 'redux';
import logo from './logo.svg';
import './App.css';
import reducers from './reducers';

import List from './containers/List';
import Detail from './containers/Detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='col-sm-4'><List /> </div>

        <div className='col-sm-8'> <Detail /> </div>
      </div>
    );
  }
}

export default App;
