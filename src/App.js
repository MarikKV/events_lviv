import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import ControlledCarousel from './Carousel';
import Header from './Header';
import CardEvent from './CardEvent';


class App extends Component{
  render(){
    return (
        <div className="App">
          <Header/>

          <div className="container w-50 mt-3">
              <ControlledCarousel/>
          </div>

          <CardEvent />
        </div>
    );
  }
}

export default App;
