import React from 'react';
import { Card ,CardBody,CardImg,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import { from } from 'rxjs';

function Rendercard({item}){
    return(
        <Card>
            <CardImg src={item.src} alt={item.name}></CardImg>
            <CardBody>
            <CardTitle >{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>
                {item.description}
            </CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <Rendercard item={props.dish}></Rendercard>
                </div>
                <div className="col-12 col-md m-1">
                <Rendercard item={props.promotion}></Rendercard>
                </div>
                <div className="col-12 col-md m-1">
                <Rendercard item={props.leader}></Rendercard>
                </div>
            </div>
        </div>
    );
}

export default Home;