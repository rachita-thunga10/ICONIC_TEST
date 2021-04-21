import React from 'react';
import './App.css';
import Catalogue from './components/catalogue';
import Maincontent from './components/maincontent';

export class App extends React.Component<any, any> {
  state = {
    items: "check"
  };

  render () {
    return (
      <div className="App">
        <Catalogue/>
        <Maincontent/>
      </div>
    );
  }
}

export default App;