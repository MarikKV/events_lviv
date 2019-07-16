import React, {Component} from 'react';

import CardEvent from "./CardEvent";

class ThisWeek extends Component {
    render() {
        return (
           <div ClassName="container">
               <CardEvent />
               <CardEvent />
               <CardEvent />
               <CardEvent />
           </div>
        );
    }
}
export default ThisWeek;