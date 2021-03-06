import React,{ Component } from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';


   function RenderDish({dish}){
   	if(dish!=null)
   		return(
   			<Card>
				<CardImg top src={dish.image} alt={dish.name}/>
				<CardBody>
				<CardTitle>{dish.name}</CardTitle>
				<CardText>{dish.description}</CardText>
				</CardBody>
				</Card>
   		);
   	else{
			return(
				<div></div>
				);
		}
   }

   const DishDetails = (props) => {
   	if(props.dish!=null)
  {
   	const dishdetail = props.comments.map((commented) => {
   		return(
   			<div className="col-12"  >
   				<div key={commented.id}>
   					<h5>{commented.comment}</h5>
   					<h5>{commented.date}</h5>
   				</div>
   			</div>


   		);
   		
   	}

   	);

   	return(
   		<div className="container">
		   <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
            </div>
   		<div className="row">
   			<div className="col-12 col-md-5 m-1">
   			<RenderDish dish={props.dish}/>
   			</div>
   			<div className="col-12 col-md-5 m-1">
   			{dishdetail}
   			</div>
   		</div>
   		</div>

   	);
   }
   else
   {
   	return(
 		<div></div>
   	);
   }

   }


export default DishDetails;