import React,{ Component } from 'react';
import { Media } from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetails extends Component{

	constructor(props){
		super(props);
		// this.state={
		// 	dish:null
		// }

	}

	renderdish(dish)
	{
		if(dish!= null)
		{
			return(
				<Card>
				<CardImg top src={dish.image} alt={dish.name}/>
				<CardBody>
				<CardTitle>{dish.name}</CardTitle>
				<CardText>{dish.description}</CardText>
				</CardBody>
				</Card>

		);
		}
		else{
			return(
				<div></div>
				);
		}
	}

	render(){		

		if(this.props.dish)
		{
			const details=this.props.dish.comments.map((commented)=>{
				let dateObj = new Date(commented.date);
			return(
				<div className="col -12">
					<div key={commented.id}>
						<h3> {commented.comment} </h3>
						<h3> -- {commented.date} </h3>
					</div>
				</div>

				);
			});
			return (
            <div className="container">
                <div className="row ">
                	<div className="col-12 col-md-5">
                    {this.renderdish(this.props.dish)}
                     </div>
                    <div className="col-12 col-md-5">
                    {details}
                    </div>
                 </div>
 
            </div>
        );	
		}
		else
		{
			return (
				<div></div>
			);
		}

		
	}
}
export default DishDetails;