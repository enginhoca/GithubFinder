import React, { useContext, useEffect, useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';


const Search = () => {
    useEffect(() => {
        return () => {
            context.clearUsers();
        }
    }, []); 
    const [keyword, setKeyword] = useState('');
    const context = useContext(AppContext);
    const handleOnChange = ((e) => {
        e.preventDefault();
        if (keyword === '') {
            context.initAlert('Lütfen bir anahtar kelime giriniz!', 'danger');
        }
        else {
            context.searchUsers(keyword);
            setKeyword('');
        }

    });
    return (
        <Container >
            <Form onSubmit={handleOnChange} className='mt-3'>
                <Row className='g-1'>
                    <Col xs={11}>
                        <Form.Control
                            type='text'
                            placeholder='Type search user...'
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </Col>
                    <Col xs={1} className='text-end' >
                        <Button
                            className='btn btn-primary'
                            type='submit'
                        >Search</Button>
                    </Col>
                </Row>
            </Form>
            {context.showClearButton &&
                <div className='d-grid mt-2'>
                    <Button
                        className='btn btn-danger'
                        type='button'
                        onClick={context.clearUsers}>
                        Clear Results
                    </Button>
                </div>
            }


        </Container>
    )
}

export default Search