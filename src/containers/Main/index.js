import React, { Component } from 'react';
import About from '../../components/About';
import Team from '../../components/Team';
import Testimonials from '../../components/Testimonials';
import "./styles.css";

export default class Main extends Component {
  render() {
    return (
        <React.Fragment>
          <About />
          <Testimonials />
          <Team />
        </React.Fragment>
    );
  }
}