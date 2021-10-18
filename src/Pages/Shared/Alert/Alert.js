import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertMessage = ({ show, alertMessage }) => {
    const [showAlert, setShowAlert] = useState(show);
    // const [alertMessage, setAlertMessage] = useState('');
    return (
        <div>
            {
                showAlert ? (
                    <>
                        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                            <Alert.Heading>{alertMessage}</Alert.Heading>
                        </Alert>
                    </>
                ) : ''
            }
        </div>
    );
};

export default AlertMessage;