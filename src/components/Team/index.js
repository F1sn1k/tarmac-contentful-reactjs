import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";
import * as contentful from 'contentful';

var client = contentful.createClient({
    space: '0w8u6uuma4ys',
    accessToken: 'jS0vLmCm8UM_DexDUqhEHFot0aJw00PsOL9uslYS4aU'
})

class Team extends Component {
    render() {
        console.log("CLIENT", client);
        return (
            <div className="team-section">
                <Container className="team-ctn">
                    <Row>
                        <Col className="team-details">
                            <h1>Welcome to Tarmac Website</h1>            
                        </Col>
                    </Row>
                </Container>
            </div>
    )}
}

export default Team;