import React, {Component} from 'react';

import Category from "./Category";


class Categories extends Component {
    render() {
        return (
            <div className="container w-100 mt-3">
                <Category />
                <Category />
                <Category />
            </div>
        );
    }
}

export default Categories;