import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

    componentDidMount() {
        // console.log("Menu component did mount");
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                // <DishDetail dish={dish}/>
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle tag="h5"> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        }
        else return (
            <div></div>
        )
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={ () => this.props.onClick(dish.id)} >
                            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle tag="h5"> {dish.name} </CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                </div>
            </div>
        );
    }
}

export default Menu;