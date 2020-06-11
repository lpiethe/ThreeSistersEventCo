import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';
import '../fonts/GreatVibes-Regular.ttf';
import '../fonts/LexendTera-Regular.ttf';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Three Sisters Event Co</h1>
                                <h2>less stress. more fun</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}
                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand classname="font" href="/"><h1>Three Sisters Event Co</h1></NavbarBrand>
                    <Link to="About">
                        <li>About</li>
                    </Link>
                    <Link to="Work">
                        <li>Our Work</li>
                    </Link>
                    <Link to="Services">
                        <li>Services</li>
                    </Link>
                    <Link to="About">
                        <li>Contact</li>
                    </Link>
                    </div>
                </Navbar>
                
            </React.Fragment>
        );
    }
}

export default Header;