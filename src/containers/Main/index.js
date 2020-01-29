import React, { Component } from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Clients from '../../components/Clients';
import Testimonials from '../../components/Testimonials';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import "./styles.css";

export default class Main extends Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <About />
          <Clients />
          <Testimonials />
          <Team />
          <Contact />
        </React.Fragment>
    );
  }
}