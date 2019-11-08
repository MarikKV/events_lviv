import React, {Component} from 'react';

import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import ControlledCarousel from './Components/Carousel';
import Header from './Components/Header';
import Categories from './Components/Categories';
import ThisWeek from "./Components/ThisWeek";
import StartPage from "./Components/StartPage";
import Footer from "./Components/Footer";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Route exact path='/' component={ControlledCarousel}/>
                    <Route exact path='/' component={StartPage}/>

                    {
                        //for home page
                    }
                    <Route path='/home' component={ControlledCarousel}/>
                    <Route path='/home' component={StartPage}/>
                    {
                        //categories page}
                    }
                    <Route path='/categories' component={Categories}/>
                    {
                        //this week page
                    }
                    <Route path='/thisWeek' component={ThisWeek}/>

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
