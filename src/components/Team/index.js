import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import "./styles.css";
import * as contentful from 'contentful';

var client = contentful.createClient({
    space: '0w8u6uuma4ys',
    accessToken: 'jS0vLmCm8UM_DexDUqhEHFot0aJw00PsOL9uslYS4aU'
})

class Team extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        this.getContent()
    }

    getContent = () => {
        const employee_list = []
        client.getEntries().then(entries => {
            entries.items.forEach(entry => {
                employee_list.push(entry.fields)
                this.setState({employees: employee_list})
            })
        })
        .catch((error) => {
            console.log("Error occurred while fetching Entries")
            console.error(error)
        })
    }
    
    render() {
        const { employees } = this.state;
        return (
            <div className="team-section">
                <Container className="team-ctn">
                    <Row>
                        { employees.map((employee) => {
                            return (
                                <Col xs="4" className="team-details" >
                                    <Card>
                                        <CardImg top width="100%" src={employee.photo.fields.file.url} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{employee.fullName}</CardTitle>
                                            <CardSubtitle>{employee.position}</CardSubtitle>
                                            <CardText>{employee.location}</CardText>
                                        {/* <Button>Button</Button> */}
                                        </CardBody>
                                    </Card>           
                                </Col>
                            )
                        })}
                    </Row>
            
                </Container>
            </div>
    )}
}

export default Team;