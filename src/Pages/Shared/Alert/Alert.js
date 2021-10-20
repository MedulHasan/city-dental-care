import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { signInSuccess } from '../../SignIn/SignIn';

const AlertMessage = () => {
    const success = signInSuccess();
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{success}</Alert.Heading>
            </Alert>
        );
    }
    return '';
};

export default AlertMessage;