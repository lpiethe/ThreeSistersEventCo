import React, { Component } from 'react';
import { Form, Label, Input, FormGroup, Col, Row, Container } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div className="contact FadeItems">
                <Container>
                <Row >
                <Col sm={6} className='Form'>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="name" name="name" id="name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="eventType">What's the Occassion?</Label>
                        <Input type="eventType" name="eventType" id="eventType" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">How did you find us?</Label>
                        <Input type="select" name="select" id="exampleSelect" placeholder="select">
                            <option>SELECT</option>
                            <option>Word of Mouth</option>
                            <option>Social Media</option>
                            <option>Internet Search</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="additionalInfo">Anything else we should know?</Label>
                        <Input type="textarea" name="additionalInfo" id="additionalInfo" />
                    </FormGroup>
                </Form>
                </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;