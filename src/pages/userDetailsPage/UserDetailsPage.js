import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const UserDetailsPage = () => {
    const context = useContext(AppContext);
    const { login } = useParams();
    useEffect(() => {
        context.getUserr(login);
    }, []);


    console.log(context.userr.login);
    return (
        
        <Container className='mt-4'>
            <Card>
                <Row>
                    <Col xs={4}>
                        <Card.Img variant="top" src={context.userr.avatar_url} />
                    </Col>
                    <Col xs={8}>
                        <Card.Body>
                            <Card.Title>{context.userr.name}</Card.Title>
                            <Card.Text>
                                LoginName: {context.userr.login}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Col>
                </Row>


            </Card>
        </Container>
    )
}

export default UserDetailsPage