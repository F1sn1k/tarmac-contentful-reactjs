import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";
import * as contentful from 'contentful';

var client = contentful.createClient({
    space: '0w8u6uuma4ys',
    accessToken: 'jS0vLmCm8UM_DexDUqhEHFot0aJw00PsOL9uslYS4aU'
})

class About extends Component {
    state = {
        services: []
    }

    componentDidMount() {
        this.getContent()
    }

    getContent = () => {
        const service_list = []
        client.getEntries({content_type: "about"}).then(entries => {
            entries.items.forEach(entry => {
                service_list.push(entry.fields)          
                this.setState({services: service_list})
            })

        })
        .catch((error) => {
            console.log("Error occurred while fetching Entries")
            console.error(error)
        })
    }
    
    render() {
        const { services } = this.state;
        return (
            <div className="about-section">
                <Container className="section-ctn">
                    <Row>
                        <Col>
                            <h1>Design, Build, Scale & Support.</h1>
                        </Col>
                    </Row>
                    <Row>
                        { services.map(function(service, i) {
                            return (
                                <Col xs="6" className="service-details" key={i}>
                                    <div className="service-title">{service.serviceTitle}</div>      
                                    <div className="service-description">{service.serviceDescription}</div>   
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
    )}
}

export default About;