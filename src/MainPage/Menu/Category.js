import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";

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
        fetch('https://jsonplaceholder.typicode.com/users')
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
                    {items.map(item => (
                        <Nav.Link href={'/categories/' + item.id} key={item.id}>
                            <Jumbotron fluid key={item.id}>
                                <Container>
                                    <h1>{item.name}</h1>
                                    <p>
                                        {item.email} <br/> {item.phone} <br/> {item.website}
                                    </p>
                                </Container>
                            </Jumbotron>
                        </Nav.Link>
                    ))}
                </div>
            );
        }
    }
}

export default Category;