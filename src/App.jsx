import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Greeter from "./components/Greeter";

class App extends Component {
    render() {
        return (
          <div>
            <Header /> 
            <div className="container">
            	<Greeter />
            </div>
          </div>
        );
    }
}

export default App;
