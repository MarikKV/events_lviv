import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import ControlledCarousel from './Carousel';
import Header from './Header';

class App extends Component{
  render(){
    return (
        <div className="App">
          <Header/>
          <ControlledCarousel/>
        </div>
    );
  }
}

export default App;
