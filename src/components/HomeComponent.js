import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Col,
    Container,
    Row,
} from 'reactstrap';
import Review from './reviews.js';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                <Container >
                        <Row>
                             <Col sm={8} className='welcome'>
                                 <h1>Welcome!</h1>
                                <h3>We are thrilled that you are visiting our site because
                    that means you are in the process of planning something amazing. 
                    Let us check a few things off of that to-do list of yours! 
                    </h3>
                             </Col> 
                        </Row>
                    </Container>
                </div>
                <div className="home FadeItems">
                </div>
                <div>
                    <Container >
                        <Row>
                            <Col sm={8} className='reviews' width='60px' height='60px'>
                                
                                <Review />
                               
                            </Col>
                        </Row>
                    </Container>
                    </div>
                
            </React.Fragment>
        );
    }
}

export default Home;