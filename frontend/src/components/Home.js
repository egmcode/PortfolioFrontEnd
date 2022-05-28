import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Cards from './Cards';
import About from './About';
import Footer from './Footer';
import Experiences from './Experiences';
import '../styles/Home.css';
import SignIn from './SignIn';

class Home extends Component {
    render()
    {
        return(
            <div className="home-container">
                <Navbar />
                <Main />
                <Cards />
                <Experiences />
                <About />
                <SignIn />
                <Footer />
            </div>
        )
    }
}

export default Home;