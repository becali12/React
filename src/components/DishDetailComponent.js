import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card> 
            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
            <CardBody>
                    <CardTitle tag="h5"> {dish.name} </CardTitle>
                    <CardText> {dish.description} </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
        let render_comments = null;
        
        if(comments != null) {
            render_comments = comments.map((comment) => {
                return(
                    <div key={comment.id}>
                        <Card>
                            <CardText tag="h5"> {comment.author} </CardText>
                            <CardBody> {comment.comment} </CardBody>
                            <CardText> {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(
                                new Date(Date.parse(comment.date)))} </CardText>
                        </Card>
                    </div>
                );
            })
            return(
                <div>{render_comments}</div>
            );
        }
        else return (<div>There are no comments at the moment</div>);
    }

    const DishDetail = (props) => {  
        if(props.dish == null)
            return (<div></div>);

        return (
            <div>
                <div className='row'>                
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <ul>
                          <li> <RenderComments comments={props.dish.comments}/> </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

export default DishDetail;