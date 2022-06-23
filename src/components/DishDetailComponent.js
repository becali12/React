import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({dish}) {
    return (
        <div className="col-md-4 mx-auto m-1">
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
        
        if(comments != null) {
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h1 className="mb-4"> Comments </h1>
                    <ul className='list-unstyled'>
                        {comments.map(comment => // return is implied
                                <li key = {comment.id}>
                                    <h3>{comment.author}:</h3>
                                    <p>{comment.comment}</p>
                                    <p>{new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(
                                new Date(Date.parse(comment.date)))}</p>
                                </li>
                            
                        )}
                    </ul>
                </div>
            );
        }
        else return (<div>There are no comments at the moment</div>);
    }

    const DishDetail = (props) => {  
        if(props.dish == null)
            return (<div></div>);

        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to='/menu'> Menu </Link></BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h1> {props.dish.name} </h1>
                        <hr/>
                    </div>
                </div>

                <div className='row'>                
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    }

export default DishDetail;