import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import s from '../ModuleStyles/ThisWeek.module.css';

class ThisWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            price: null
        }
        this.filter = this.filter.bind(this);
    }
    componentDidMount() {
        fetch('https://api.gastroli.ua/v2/events/filter?locale=uk&public_key=3638eeb29dff9f8bb81f72e805769df0&filter%5Bcity_id%5D=1&limit=24&offset=24')
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
    filter(e){
        //console.log('min price', e.target.value, this.state.items, this.state.items.events);
        if(e.target.value === 'min'){
            let newItemMin = this.state.items.events.sort(function (a, b) {
                return a.min_tickets_price - b.min_tickets_price;
            });
            this.state.items.events = newItemMin;
            this.setState({
                items: this.state.items
            })
        }
        if(e.target.value === 'max'){
            let newItemMin = this.state.items.events.sort(function (a, b) {
                return b.min_tickets_price - a.min_tickets_price;
            });
            this.state.items.events = newItemMin;
            this.setState({
                items: this.state.items
            })
        }
        if(e.target.value === 'soon'){
            console.log('soon')
            let newItemMin = this.state.items.events.sort(function (a, b) {
                a.date = new Date(a.event_start).getTime()
                b.date = new Date(b.event_start).getTime()
                return a.date - b.date;
            });
            this.state.items.events = newItemMin;
            this.setState({
                items: this.state.items
            })
        }
        if(e.target.value === 'afterward'){
            console.log('afterward')
            let newItemMin = this.state.items.events.sort(function (a, b) {
                a.date = new Date(a.event_start).getTime()
                b.date = new Date(b.event_start).getTime()
                return b.date - a.date;
            });
            this.state.items.events = newItemMin;
            this.setState({
                items: this.state.items
            })
        }
    }
    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={s.lds_facebook}><div></div><div></div><div></div></div>;
        } else {
        return (
            <div className="container p-5">
            <h1 className="text-center py-5">Усі події у місті Львів</h1>
            <div className="row">
                <main className="col-sm-9 events_block">
                {items.events.map(item => (
                    <div className="row border p-3 rounded m-3" key={item.id}>
                        
                        <div className="col-md-5">
                            <img src={item.new_promo_image_url} className="img-fluid rounded"  alt="" />
                        </div>
                        <div className="col-md-7">
                            <h4>{item.name}</h4>
                            <p style={{textAlign: 'left'}}>
                                
                                <b>Заклад:</b> {item.venue.short_name}
                                <br /><b>Час:</b> {item.event_start.substring(11, 16)}
                                <br /><b>Дата:</b> {item.event_start.substring(0, 10)}
                                <br /><b>Ціна від: </b> {item.min_tickets_price}
                                <b> до </b> {item.max_tickets_price}<b>гривень</b>
                                <br /><b>Всього квитків: </b> {item.all_tickets_count}

                            </p>
                            <a href="" className="btn btn-primary">More</a>
                        </div>
                    </div>
                ))}
                </main>

                <aside className="col-sm-3   my-3 border rounded">
                    <h4 className="text-center p-3">Filters</h4>
                    <h5>Price</h5>
                    <fieldset style={{textAlign: 'left'}}>
                        <Form.Group as={Row}>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Max"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value='max'
                            onClick={this.filter}
                            />
                            <Form.Check
                            type="radio"
                            label="Min"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value='min'
                            onClick={this.filter}
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>

                    <h5>Date</h5>
                    <fieldset style={{textAlign: 'left'}}>
                        <Form.Group as={Row}>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Soon"
                            name="formHorizontalRadios1"
                            id="formHorizontalRadios1"
                            value='soon'
                            onClick={this.filter}
                            />
                            <Form.Check
                            type="radio"
                            label="Afterward"
                            name="formHorizontalRadios1"
                            id="formHorizontalRadios2"
                            value='afterward'
                            onClick={this.filter}
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>
                </aside>
            </div>
        </div>
        );
        }
    }
}
export default ThisWeek;