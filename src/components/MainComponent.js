import { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponnet';

import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

class Main extends Component {

  render() {
    
    const HomePage = () => {
      console.log(this.props.dishes);
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }

    // useParams receives the dishId from the url provided to it
    const DishWithId = () => {
      const { dishId } = useParams();
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(dishId))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId))}
        />
      );
    }

    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route exact path="/menu" element={<Menu dishes={this.props.dishes}/>} />
          <Route path="/menu/:dishId" element={<DishWithId/>}/>
          <Route exact path="/contactus" element={<Contact/>}/>
          <Route exact path="/aboutus" element={<About leaders={this.props.leaders}/>}/>
          <Route path="*" element={<Navigate to ="/home"/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
