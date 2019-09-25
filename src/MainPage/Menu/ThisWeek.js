import React, {Component} from 'react';

import CardEvent from "../CardEvent/CardEvent";

class ThisWeek extends Component {
    render() {
        return (
           <div className='container'>
               <h1>Цікаві події цього тижня</h1>

               <br />

               <CardEvent />
           </div>
        );
    }
}
export default ThisWeek;