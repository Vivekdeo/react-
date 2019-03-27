import React, { Component } from 'react';
import Menu from './MenuComponents';
import DishDetails from './dishdetails'
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Contact from './ContactComponents';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import About from './AboutComponents';


const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}

class Main extends Component {
  constructor(props){
    super(props);
  }

  

  render() {
    const DishWithId=({match})=>{
      return(
        <DishDetails dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}>
        </DishDetails>
      );
    }
    
    

    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          
        />
      );
    }
    return (
      <div >
          <Header/>
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}></Menu>}></Route>
            <Route exact path="/contactus" component={Contact}></Route>
            <Route path="/menu/:dishId" component={DishWithId}></Route>
            <Route path="/aboutus" component={()=> <About leaders={this.props.leaders}></About>}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));