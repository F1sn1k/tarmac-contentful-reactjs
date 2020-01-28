import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./styles.css";
import * as contentful from 'contentful-management';

var client = contentful.createClient({
    accessToken: 'CFPAT-iOSsWRMdnBy2txHRN7pWFgpw8I0_B1og70FRkaI8p58'
})

class Contact extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        let name = event.target[0].value;
        let email = event.target[1].value;
        let description = event.target[2].value;

        client.getSpace('0w8u6uuma4ys')
        .then((space) => space.createEntry('contact', {
            fields: {
                fullName: { 'en-US': name },
                email: { 'en-US': email },
                description: { 'en-US': description }  
            }
        }))
        .then((entry) => console.log(entry))
        .catch(console.error)
    }

    render() {
        return (
            <div className="testimonials-section">
                <Container className="testimonials-ctn">
                    <Row>
                        <Col>
                            <h1>Contact Tarmac</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup className="col-4">
                                    <Label for="name"></Label>
                                    <Input type="text" name="first_name" id="name" placeholder="Enter your name"></Input>
                                </FormGroup>
                                <FormGroup className="col-4">
                                    <Label for="email"></Label>
                                    <Input type="text" name="email" id="email" placeholder="Enter your email"></Input>
                                </FormGroup>
                                <FormGroup className="col-4">
                                    <Label for="description"></Label>
                                    <Input type="description" name="description" id="email" placeholder="Enter your description"></Input>
                                </FormGroup>
                                <FormGroup className="cmp-btn">
                                    <Button className="complain-button">Submit</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
    )}
}

export default Contact;