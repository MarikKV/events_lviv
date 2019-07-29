import React, {Component} from 'react';

import CardEvent from "../CardEvent/CardEvent";

class ThisWeek extends Component {
    render() {
        return (
           <div className='container'>
               <h1>All popular events in your city this week</h1>

               <br />

               <CardEvent />
           </div>
        );
    }
}
export default ThisWeek;