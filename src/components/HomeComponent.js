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
    Button,
    Modal,
    ModalHeader,
    Label,
    Input,
    FormGroup,
    ModalBody,
    Form
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import BeautyStars from 'beauty-stars';
import Review from './reviews.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            value: 0,
            startDate: new Date()
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

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

                                <Button onClick={this.toggleModal}>Leave a Review</Button>

                                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal} style={{ fontFamily: 'Great Vibes' }}>How did we do?</ModalHeader>
                                    <ModalBody>
                                        <Form onSubmit={this.handleLogin} style={{ fontFamily: 'LexendTera' }}>
                                            <FormGroup>
                                                <Label htmlFor="clientname">Client Name</Label>
                                                <Input type="text" id="clientname" name="clientname"
                                                    innerRef={input => this.clientname = input} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor='date'></Label> 
                                                <DatePicker
                                                
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                                />


                                            </FormGroup>

                                            <FormGroup>
                                                <Label htmlFor="rating">Rating</Label>
                                                <Input type="select" name="rating" id="rating" placeholder="rating">
                                                    <option>SELECT</option>
                                                    <option>5</option>
                                                    <option>4</option>
                                                    <option>3</option>
                                                    <option>2</option>
                                                    <option>1</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="additionalComments">Additional Comments</Label>
                                                <Input type="textarea" name="additionalComments" id="additionalComments" />
                                            </FormGroup>
                                            <Button type="submit" value="submit" color="dark">Submit Review</Button>
                                        </Form>
                                    </ModalBody>
                                </Modal>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </React.Fragment>
        );
    }
}

export default Home;