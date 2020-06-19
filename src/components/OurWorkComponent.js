import React, { Component } from 'react';
import {
    Card, CardImg, Row, CardBody,
    CardTitle, Container, Col
} from 'reactstrap';
import { Button } from 'react-bootstrap';
import BabySlider from './babySlider';
import BridalSlider from './bridalSlider';
import BirthdaySlider from './birthdaySlider';

class Work extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment >
                <div className='FadeItems'>
                <BabySlider />
                <BridalSlider />
                <BirthdaySlider />
                </div>
            </React.Fragment>
        );
    }
}

export default Work;