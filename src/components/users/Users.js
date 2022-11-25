import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Loading from '../loading/Loading';
import User from '../user/User';
import { AppContext } from '../../context/AppContext';


const Users = () => {
    const context = useContext(AppContext);
    if (context.loading) {
        return <Loading />
    } else {
        return (
            <Container>
                <Row className='mt-3'>
                    {
                        context.users.map((u) => <User user={u} key={u.id} />)
                    }
                </Row>
            </Container>
        )
    }
}

export default Users