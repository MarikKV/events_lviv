import React, {Component} from 'react';

import {BrowserRouter, Route} from "react-router-dom";

//import logo from './logo.svg';
import '../App.css';
import ControlledCarousel from '../MainPage/Start_page/Carousel';
import Header from '../MainPage/Menu/Header';
import Categories from '../MainPage/Menu/Categories';
import ThisWeek from "../MainPage/Menu/ThisWeek";
import StartPage from "../MainPage/Start_page/StartPage";
import Footer from "../MainPage/FooterComponent/Footer";


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
