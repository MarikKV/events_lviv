import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import ControlledCarousel from './Carousel';
import Header from './Header';
import Categories from './Categories';
import {BrowserRouter, Route} from "react-router-dom";
import ThisWeek from "./ThisWeek";


class App extends Component{
  render(){
    return (
        <BrowserRouter>
            <div className="App">
              <Header/>

              <Route path='/home' component={ControlledCarousel} />
              <Route path='/home' component={ThisWeek} />

              <Route path='/categories' component={Categories} />

              <Route path='/thisWeek' component={ThisWeek} />

            </div>
        </BrowserRouter>
    );
  }
}

export default App;
