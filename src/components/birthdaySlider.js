import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const photos = [
    {
        name: 'Photo 1',
        url: (require('../images/birthday1.jpeg'))
    },
    {
        name: 'Photo 2',
        url: (require('../images/birthday2.jpeg'))
    },
    {
        name: 'Photo 3',
        url: (require('../images/birthday3.jpg'))
    }
]

class BirthdaySlider extends Component {
    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slideToShow: 1,
            slidesToScroll: 1,
            className: 'slides'
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                        <h2 style={{paddingTop: 200, fontFamily:'CrimsonText', color: 'darkgray'}}>Birthday Parties</h2>
                        </Col>
                        <Col sm={8}>
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div className='sliderDiv'>
                                <img width='100%' src={photo.url} style={{padding: 20}} />
                            </div>
                        )
                    })}
                   
                </Slider>
                </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BirthdaySlider;