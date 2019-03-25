import React, { Component } from 'react';
import Menu from './MenuComponents';
import DishDetails from './dishdetails'
import { Navbar, NavbarBrand } from 'reactstrap';
import {DISHES} from '../shared/dishes';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      
    };
  }

  

  render() {
    const HomePage=()=>{
      return(
        <Home/>
      );
    }
    return (
      <div >
          <Header/>
          <Switch>
            <Route path="/home" component={HomePage}></Route>
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}></Menu>}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default Main;