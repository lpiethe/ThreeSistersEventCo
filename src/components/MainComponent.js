import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../fonts/HomemadeApple-Regular.ttf';
// import '../fonts/Montserrat-ExtraLight.ttf';
import '../App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './AboutComponent';
import Work from './OurWorkComponent';
import Home from './HomeComponent';
import Services from './ServicesComponent';
import Contact from './ContactComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <Router>

            <div>
               <Header/>
                    <Switch>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Work" component={Work}/>
                <Route exact path="/Services" component={Services}/> 
                <Route exact path="/Contact" component={Contact}/> 
                <Route exact path="/" component={HomePage}/> 
                    </Switch>
                
          <Footer/>
            </div>
            </Router>
        );
    }
}

export default Main;