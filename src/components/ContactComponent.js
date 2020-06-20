import React, { Component } from 'react';
import { Form, Label, Input, FormGroup, Col, Row, Container, Button, FormFeedback } from 'reactstrap';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            touched: {
                name: false,
                email: false,
                phoneNumber: false       
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(name, email, phoneNumber) {

        const errors = {
            name: '',
            email: '',
            phoneNumber: ''
        };

        if (this.state.touched.name) {
            if (name.length < 2) {
                errors.name = 'First name must be at least 2 characters.';
            } else if (name.length > 30) {
                errors.name = 'Name must be 30 or less characters.';
            }
        }


        const reg = /^\d+$/;
        if (this.state.touched.phoneNumber && !reg.test(phoneNumber)) {
            errors.phoneNumber = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Thank you for submitting your information: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
   
    
    handleButton = () => {
        alert('Thank you for submitting your information. We would love to help plan your party!');
      }  

    render() {
        const errors = this.validate(this.state.name, this.state.phoneNumber, this.state.email);  
        return (
            <div className="contact FadeItems">
                <Container>
                <Row >
                <Col sm={6} className='Form'>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input 
                        type="name" 
                        name="name" 
                        id="name" 
                        value={this.state.name}
                        onBlur={this.handleBlur("name")}
                        onChange={this.handleInputChange} />
                        <FormFeedback>{errors.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                    <Label for="email"> Email</Label>
                        <Input    
                        type="text" 
                        name="email" 
                        id="email" 
                        value={this.state.email} 
                        invalid={errors.email}
                        onBlur={this.handleBlur("email")}
                        onChange={this.handleInputChange}/>
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                    <Label for="phoneNumber"> Phone Number</Label>
                        <Input 
                              type="text" 
                              name="phoneNumber" 
                              id="phoneNumber" 
                              value={this.state.phoneNumber} 
                              invalid={errors.phoneNumber}
                              onBlur={this.handleBlur("phoneNumber")}
                              onChange={this.handleInputChange}/>
                              <FormFeedback>{errors.phoneNumber}</FormFeedback>
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
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
                </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;