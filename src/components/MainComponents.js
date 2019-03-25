import React, { Component } from 'react';
import Menu from './MenuComponents';
import DishDetails from './dishdetails'
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Contact from './ContactComponents';
import {Switch,Route,Redirect} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    };
  }

  

  render() {
    const DishWithId=({match})=>{
      return(
        <DishDetails dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}>
        </DishDetails>
      );
    }

    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          
        />
      );
    }
    return (
      <div >
          <Header/>
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}></Menu>}></Route>
            <Route exact path="/contactus" component={Contact}></Route>
            <Route path="/menu/:dishId" component={DishWithId}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default Main;