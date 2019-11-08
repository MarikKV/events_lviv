import React, {Component} from 'react';

import CardEvent from "./CardEvent";

class StartPage extends Component {
    render() {
        return (
            <div className="container">
                <div style={{width: '100%', float: 'right'}}>
                    <h1>Цікаві події у вашому місті</h1>
                    <br />
                    <CardEvent />
                </div>
            </div>
        );
    }
}

export default StartPage;