import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'


class Column extends Component{

    render(){
        return(
          
            <Card>
               
              <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardSubtitle>{this.props.subTitle}</CardSubtitle>
               
              
              </CardBody>
              
            </Card>
            
        )
    }
    
}

export default Column;