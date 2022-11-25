import React from 'react'
import Container from 'react-bootstrap/Container'

const HomePage = () => {
    return (
        <Container className="mt-4">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"85vh"}}>
                <h1 className="display-1 mb-5">Home Page</h1>
                <h2 className="display-6">Github Finder</h2>
            </div>
        </Container>
    )
}

export default HomePage