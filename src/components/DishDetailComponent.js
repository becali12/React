import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderDish(dish) {
        return (
            <Card> 
            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
            <CardBody>
                    <CardTitle tag="h5"> {dish.name} </CardTitle>
                    <CardText> {dish.description} </CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        const render_comments = comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <Card>
                        <CardText tag="h5"> {comment.author} </CardText>
                        <CardBody> {comment.comment} </CardBody>
                    </Card>
                </div>
            );
        })
        return(
            <div>{render_comments}</div>
        );
    }

    render() {
        const dish = this.props.dish; // dish is provided from MenuComponent when a dish image is clicked on
    
        return (
            <div>
                <div className='row'>                
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                         {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
        );
        // else if(comments == null) return (
        //     <div>
        //         <div className='row'>
        //         <Card> 
        //         <CardImg width="100%" object src={dish.image} alt={dish.name}/>
        //         <CardBody>
        //                 <CardTitle tag="h5"> {dish.name} </CardTitle>
        //                 <CardText> {dish.description} </CardText>
        //             </CardBody>
        //         </Card>             
        //         </div>
        //     </div>
        // );
    }
}

export default DishDetail;