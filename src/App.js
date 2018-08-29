import React, { Component } from 'react';
import Home from './Components/Home';
import Search from './Components/Search';
import logo from './Images/logi.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={App}>
          <Home/>
        <Search/>

      </div>
    )
  }
}

export default App;
