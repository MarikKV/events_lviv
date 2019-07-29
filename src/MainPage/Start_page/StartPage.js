import React, {Component} from 'react';

import CardEvent from "../CardEvent/CardEvent";

class StartPage extends Component {
    render() {
        return (
            <div className="container">
                <div style={{width: '100%', float: 'right'}}>
                    <h1>Popular events in your city this week</h1>
                    <br />
                    <CardEvent />
                </div>

                <div style={{width: '100%', float: 'right'}}>
                    <h1>Other events in your city</h1>
                    <br />
                    <CardEvent />
                </div>
            </div>
        );
    }
}

export default StartPage;