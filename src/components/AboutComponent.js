import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import cupcakePhoto from '../images/cupcakes.jpeg';

class About extends Component {
    render() {
        return(
           <React.Fragment>
               <Container >
                   <Row className = 'about FadeItems'>
                       <Col sm={4} >
                           <h2>A little about the three sisters...</h2>
                           <h4>After planning 4 wedding showers, 6 baby showers, and 10 birthday parties, we decided it was time to help others create beautiful, unforgettable gatherings. We love flowers and believe in with the right colors and designs, they can leave a big statement. We each bring unique ideas to the table.</h4>
                          <hr></hr>
                           <h2>Our Process</h2>
                           <h5>1. Establish Budget</h5>
                           <h5>2. Create a vision and theme</h5>
                           <h5>3. Execute the plan! </h5>
                       </Col>
                       <Col>
                           <img src={cupcakePhoto} width='100%' />                       </Col>
                   </Row>
               </Container>
           </React.Fragment>
        );
    }
}

export default About;