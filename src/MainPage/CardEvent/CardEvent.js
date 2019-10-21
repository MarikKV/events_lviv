import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import s from './CardEvent.module.css';

class CardEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            moreInfo: false,
            cardIndex: 1,
            open: false
        };
    }
    componentDidMount() {
        fetch('https://api.gastroli.ua/v2/events/filter?locale=uk&public_key=3638eeb29dff9f8bb81f72e805769df0&filter%5Bcity_id%5D=1&limit=12&offset=24')
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
                    {console.log(this.state.items)}
                    {items.events.map(item => (
                        <div className={s.card} key={item.id}>
                            <Card>
                                <Card.Img variant="top"
                                          src={item.new_promo_image_url}/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.venue.short_name}
                                        <br/>
                                        {item.event_start.substring(0, 10)}
                                        <br/>
                                        {item.event_start.substring(11, 16)}
                                    </Card.Text>
                                    <Button variant="primary">
                                        Read more
                                    </Button>
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