import React, { Component } from "react";
import { 
    Container, 
    Row, 
    Col
} from 'reactstrap';
import "./styles.css";
import * as contentful from 'contentful';

var client = contentful.createClient({
    space: '0w8u6uuma4ys',
    accessToken: 'jS0vLmCm8UM_DexDUqhEHFot0aJw00PsOL9uslYS4aU'
})

class Testimonials extends Component {
    state = {
        testimonials: []
    }

    componentDidMount() {
        this.getContent()
    }

    getContent = () => {
        const testiomonials_list = []
        client.getEntries({content_type: "portfolio"}).then(entries => {
            entries.items.forEach(entry => {
                // console.log("ENTRY", entry.fields)
                testiomonials_list.push(entry.fields)          
                this.setState({testimonials: testiomonials_list})
            })
        })
        .catch((error) => {
            console.log("Error occurred while fetching Entries")
            console.error(error)
        })
    }
    
    render() {
        const { testimonials } = this.state;
        return (
            <div className="testimonials-section">
                <Container className="testimonials-ctn">
                    <Row>
                        <Col>
                            <h1>Testimonials</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
    )}
}

export default Testimonials;