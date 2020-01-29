import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";
import logo from './logo.png'; 

class Header extends Component {
    render() {
        return (
            <div className="navbar fixed-top">
                <Container className="header-ctn">
                    <Row>
                        <Col style={{ textAlign: 'left'}}>
                            <img className="logo-company" src={logo} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
    )}
}

export default Header;