import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'reactstrap';

function Footer(props) {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <Container style={{ textAlign: 'center' }}>
                    <Row>
                        <Col>
                            <h5><Link className="footerlink" to='http://www.facebook.com'><i className='fa fa-facebook'></i></Link></h5>
                        </Col>
                        <Col>
                            <h5><Link className="footerlink" to='http://www.instagram.com'><i className='fa fa-instagram'></i></Link></h5>
                        </Col>
                        <Col>
                            <h5><Link className="footerlink" to='http://www.twitter.com'><i className='fa fa-twitter'></i></Link></h5>
                        </Col>
                       
                    </Row>
                        <Row>
                            <Col style={{ textAlign: 'center', paddingTop: 10, color: 'green' }}>
                            <div className="col" >
                                    <a role="button" className="btn" href="tel:+12065551234"> 1-206-555-1234</a><br />
                                    <a role="button" className="btn" href="mailto:fakeemail@fakeemail.co"> email@threesisterseventco.com</a>
                                </div>

                            </Col>
                        </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
