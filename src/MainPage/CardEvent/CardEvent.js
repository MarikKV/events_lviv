import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import s from './CardEvent.module.css';

class CardEvent extends React.Component {
    constructor(props) {
        console.log('i constructed')
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            myvar: 10
        };
    }
    componentDidMount() {
        console.log('i didMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(
                (json) => {
                    this.setState({
                        isLoaded: true,
                        items: json
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
    render() {
        let {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {items.map(item => (
                        <div className={s.card}>
                            <Card key={item.id}>
                                <Card.Img variant="top"
                                          src="https://24tv.ua/resources/photos/news/610x344_DIR/201712/907363.jpg?201809152046"/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.email}
                                        {item.phone}
                                        {item.email}
                                    </Card.Text>
                                    <Button variant="primary">Read more</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default CardEvent;