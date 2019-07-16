import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CardEvent extends Component {
    render() {
        return (
            <Card style={{ width: '23rem', float: 'left', margin: '0rem 0rem 4rem 4rem' }}>
                <Card.Img variant="top" src="https://vi.ill.in.ua/m/625x469/1159038.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}
export default CardEvent;