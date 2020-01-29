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
                            <h1 className="white-title">Contact Tarmac</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="Contact-form-box" align="center">
                            <Form onSubmit={this.handleSubmit}>      
                                <FormGroup className="col-6">
                                    <Label for="name">Full Name</Label>
                                    <Input type="text" name="first_name" id="name" placeholder="Enter your name" className="Login-input" />
                                </FormGroup>
                                <FormGroup className="col-6">
                                    <Label for="email">Email</Label>
                                    <Input type="text" name="email" id="email" placeholder="Enter your email" className="Login-input" />
                                </FormGroup>
                                <FormGroup className="col-6">
                                    <Label for="description">Description</Label>
                                    <Input rows="4" type="textarea" name="description" id="description" placeholder="Enter your description" className="Login-input" />
                                </FormGroup>
                                <FormGroup>
                                    <Button size="lg" className="Submit-btn">Submit</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
    )}
}

export default Contact;