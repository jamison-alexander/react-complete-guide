import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>A React App!</h1>
      <Person name="Nylaa" age="28" />
      <Person name="Brytce" age="66" />
    </div>
  );
}
}

export default App;
