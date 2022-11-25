import React, { useContext, useState } from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';


const MyAlert = () => {
    const context = useContext(AppContext);
    if (context.show) {
        return (
            <>
                {
                    context.alert !== null && (
                        <Container className='mt-2'>
                            <Alert
                                onClose={() => context.setShow(false)} dismissible
                                key={context.alert.type}
                                variant={context.alert.type}>
                                Lütfen aramak için bir değer giriniz.
                            </Alert>

                        </Container>

                    )
                }
            </>
        )
    }
    return <>

    </>;

}

export default MyAlert