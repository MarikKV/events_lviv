import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
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
                    {items.event_categories.map(item => (
                            <Jumbotron fluid key={item.name} className={"col-sm-5 float-left ml-5"} >
                                <Container>
                                    <Nav.Link href={'/categories/' + item.name} key={item.name} >
                                        <h1 className={item.name.length >=12 ? "h2" : "h1"}>{item.name}</h1>
                                    </Nav.Link>
                                    <p>
                                        Кількість подій: {item.events_count}
                                    </p>
                                </Container>
                            </Jumbotron>
                    ))}
                </div>
            );
        }
    }
}

export default Category;