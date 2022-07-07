import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event) {
        this.toggleModal();
        alert("Name: " + this.username.value + "Comment: " + this.comment.value);

        event.preventDefault();
    }

    render() {
        return (
            <>
            <Button outline onClick={this.toggleModal}>
                                        <span className='fa'> Submit Comment </span>
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                            <Label>
                                <Label htmlFor="rating">Rating </Label>
                                <Input type="select" name="rating" id="rating">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                </Input>
                            </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    <Label htmlFor="username">Your Name</Label> 
                                    <Input type="text" id="username" name="username" cols="45"
                                    innerRef={(input) => this.username = input}/>
                                </Label> 
                            </FormGroup>
                            <FormGroup>
                                <Label>
                                    <Label htmlFor="comment">Comment</Label> 
                                    <Input type="textarea" id="comment" name="comment" cols="45" rows="6"
                                    innerRef={(input) => this.comment = input}/>
                                </Label> 
                            </FormGroup>

                            <Button type="submit" value="submit" className='bg-primary'> Submit </Button>
                        </Form>    
                    </ModalBody>    
                </Modal> 
            </>
        );
    }
}



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
                    <CommentForm/>
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