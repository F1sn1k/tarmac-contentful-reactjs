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
        client.getEntries({content_type: "team"})
        .then(entries => {
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
                        <Col>
                            <h1>Team</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>We have fun together and with our clients.</h3>
                        </Col>
                    </Row>
                    <Row style={{ margin: '20px', textAlign: 'center'}}>
                        { employees.map(function(employee, i) {
                            return (
                                <Col xs="3" className="team-details" key={i}>
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
                    <Row>
                        <Col>
                            <h2>We are changing the perception of offshore development</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>We are a web and mobile development shop out of Minneapolis, Minnesota; Montevideo, Uruguay; and Skopje, Macedonia that is committed to changing the perception of offshore development one client at a time.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
    )}
}

export default Team;