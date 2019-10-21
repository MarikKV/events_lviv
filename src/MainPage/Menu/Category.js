import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";

import s from './Category.module.css';


class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch('https://api.gastroli.ua/v2/events/filter?locale=uk&public_key=3638eeb29dff9f8bb81f72e805769df0&filter%5Bcity_id%5D=1&limit=12&offset=24')
            .then(res => res.json())
            .then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <ListGroup as="ul" defaultActiveKey="#link1">
                        {items.event_categories.map(item => (
                            <ListGroup.Item as="li" key={item.name} className={s.list} onClick={() => this.alertClicked(item.name)}>
                                {item.name}: {item.events_count}
                            </ListGroup.Item>
                        ))}
                        {console.log(items)}
                    </ListGroup>
                </div>
            );
        }
    }
    alertClicked(x) {
        console.log(x);
    }
}

export default Category;