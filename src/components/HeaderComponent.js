import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap';
import '../fonts/GreatVibes-Regular.ttf';
import '../fonts/LexendTera-Regular.ttf';

class Header extends Component {
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.isNavOpen} navbar>
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
                    <Link to="Contact">
                        <li>Contact</li>
                    </Link>
                    </div>
                    </Collapse>
                </Navbar>
                
            </React.Fragment>
        );
    }
}

export default Header;