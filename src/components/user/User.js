import React, { useContext, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './User.css'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
    return (
        <Col lg={2} md={3} sm={4} xs={6} className="mb-2">
            <Card>
                <Card.Img src={user.avatar_url} />
                <Card.Body className='text-center'>
                    <Card.Title className='mb-4'>
                        <h5 className='display-6 fs-6 fw-bold'>{user.login}</h5>
                    </Card.Title>
                    <Row className='gap-1'>
                        <Col><a className='btn btn-sm btn-primary' href={user.html_url}>Profile</a></Col>
                        <Col><Link className='btn btn-sm btn-warning' to={`/userr/${user.login}`}>Details</Link></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default User