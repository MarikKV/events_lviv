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
        let {error, isLoaded, items, moreInfo} = this.state;
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
                                        {moreInfo && item.id==this.state.cardIndex ?
                                            "Дата проведення: \n"+item.event_start.substring(5, 10)+
                                            "Час проведення: \n"+item.event_start.substring(11, 16)+
                                            "Місце проведення: \n"+item.venue.short_name:

                                            "Дата проведення: "+item.event_start.substring(5, 10)}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.readMore(item.id)}>
                                        {moreInfo && item.id==this.state.cardIndex ? 'Read less' : 'Read more'}
                                        {console.log(item)}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            )
        }
    }
    readMore = (x) => {
        console.log('clicked');
        console.log(x);
        if(this.state.cardIndex == x){
        this.setState({
            moreInfo : !this.state.moreInfo,
            cardIndex: x,
        })}
        else {
            this.setState({
                moreInfo : true,
                cardIndex: x,
                open: !this.state.open
            })}
    }
}

export default CardEvent;