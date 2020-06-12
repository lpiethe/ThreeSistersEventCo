import React, { Component } from 'react';
import {
    Card, CardImg, Row, CardBody,
    CardTitle, Container, Col
} from 'reactstrap';

class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Container className="FadeItems">
                    <Row>
                        <Col sm={4}>
                            <Card  className="garden">
                                <CardTitle>
                                 <h2>Parties</h2>
                                </CardTitle>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className="babyShower">
                                <CardTitle >
                                   <h2>Baby Showers</h2>
                                </CardTitle>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card className="bridal">
                                <CardBody >
                                <h2>Bridal Showers</h2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Work;