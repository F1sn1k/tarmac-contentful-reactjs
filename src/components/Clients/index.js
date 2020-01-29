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

class Clients extends Component {
    state = {
        clients: []
    }

    componentDidMount() {
        this.getContent()
    }

    getContent = () => {
        const clients_list = []
        client.getEntries({content_type: "clients"}).then(entries => {
            entries.items.forEach(entry => {
                clients_list.push(entry.fields)          
                this.setState({clients: clients_list})
            })
        })
        .catch((error) => {
            console.log("Error occurred while fetching Entries")
            console.error(error)
        })
    }
    
    render() {
        const { clients } = this.state;
        return (
            <div className="clients-section">
                <Container className="clients-ctn">
                    <Row>
                        <Col>
                            <h1>Clients</h1>
                        </Col>
                    </Row>
                    <Row className="client-banner">
                        { clients.map(function(client, i) {
                            return (
                                <Col xs="6" className="client-details" key={i}>
                                    <div>
                                        <img src={client.banner.fields.file.url} className="client-image" alt="" />
                                    </div>   
                                </Col>
                            )
                        })}
                   
                    </Row>
                </Container>
            </div>
    )}
}

export default Clients;