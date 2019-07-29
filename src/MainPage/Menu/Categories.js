import React, {Component} from 'react';

import Category from "./Category";


class Categories extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h1>What are you interested in?</h1>
                <br />
                <Category />
            </div>
        );
    }
}

export default Categories;