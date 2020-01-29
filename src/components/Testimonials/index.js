import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col} from 'reactstrap';
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as contentful from 'contentful';

var client = contentful.createClient({
    space: '0w8u6uuma4ys',
    accessToken: 'jS0vLmCm8UM_DexDUqhEHFot0aJw00PsOL9uslYS4aU'
})

let styles = {
    margin: 'auto',
    width: '800px',

  };
 
class Testimonials extends Component {
    constructor(props) {
        super(props);

        this.state = {
          testimonials: []
        };
    }

    componentDidMount() {
        this.getContent()
    }

    getContent = () => {
        const testiomonials_list = []
        client.getEntries({content_type: "portfolio"}).then(entries => {
            entries.items.forEach(entry => {
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
                        <Col><h1 className="white-title">Testimonials</h1></Col>
                    </Row>
                    <Row>
                        <div style={styles}>
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                useKeyboardArrows
                                className="presentation-mode"
                            >
                            {testimonials.map(function(testimonial, i) {
                                return (
                                    <div className="my-slide content">
                                        <div>
                                            <img className="testimonials-image" src={testimonial.image.fields.file.url} alt="" />
                                        </div>
                                        <p style={{ margin: '40px'}}>
                                            {testimonial.description}
                                        </p>
                                        <blockquote>
                                            <strong>{testimonial.person}</strong>, {testimonial.position}
                                        </blockquote>
                                    </div>
                                )
                            })}
                            </Carousel>
                        </div>
                    </Row>
                </Container>
            </div>
    )}  
}

export default Testimonials;