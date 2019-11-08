import React, {Component} from 'react';

import Carousel from 'react-bootstrap/Carousel';
import l from '../ModuleStyles/Loader.module.css';
import s from '../ModuleStyles/Category.module.css';


class ControlledCarousel extends Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            error: null,
            direction: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch('https://api.gastroli.ua/v2/events/filter?locale=uk&public_key=3638eeb29dff9f8bb81f72e805769df0&filter%5Bcity_id%5D=1&limit=3&offset=24')
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

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }
    render() {
        const { index, direction, items, error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={l.lds_facebook}><div></div><div></div><div></div></div>;
        } else {
        return (
            <div className="container w-50 mt-3 mb-5">

            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                {items.events.map(item => (
                <Carousel.Item key={item.name+item.event_start}>
                    <img
                        className="d-block w-100"
                        src={item.promo_favorite_image_url}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className={s.background_for_text}>{item.name}</h3><br />
                    <p className={s.background_for_text}>{item.venue.short_name}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
            </div>
        );
    }
}
}

export default ControlledCarousel;