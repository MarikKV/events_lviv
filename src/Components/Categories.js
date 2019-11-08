import React, {Component} from 'react';

import Category from "./Category";
import Places from "./Places";


class Categories extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h1>Що вас цікавить?</h1>
                <br />
                <Category />
                <Places />
            </div>
        );
    }
}

export default Categories;