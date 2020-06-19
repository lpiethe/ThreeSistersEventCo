import React, { Component } from 'react';
import { Container, Row, Col, CardBody, Card, CardHeader } from 'reactstrap';

class Services extends Component {
  render() {
    return (
      <div className='services FadeItems'>
        <Container>
          <Row>
            <Col sm={4} style={{paddingTop: 20, margin: 'auto', color: 'white'}}>
            <h6>* All packages include a 1 hour initial meeting. Theme, vision and overall style of gathering will be established.</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className='packageOptions'>
                <CardHeader style={{backgroundColor:'white'}}>Package 1-The Party Kit</CardHeader>
                <CardBody>
                  <p>- 1 hour planning session</p>
                  <p>- Essential decorations sent straight to you!</p>
                  <p>$250</p>
                </CardBody>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col>
            <Card className='packageOptions'>
            <CardHeader style={{backgroundColor:'white'}}>Package 2</CardHeader>
                <CardBody>
                  <p>- 1 hour planning session</p>
                  <p>- All decorations</p>
                  <p>$350</p>
                </CardBody>
                </Card>
            </Col>
            </Row>
            <Row>
            <Col>
            <Card className='packageOptions'>
            <CardHeader style={{backgroundColor:'white'}}>Package 3</CardHeader>
                <CardBody>
                  <p>- 1 hour planning session</p>
                  <p>- All decorations</p>
                  <p>$500</p>
                </CardBody>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Services;