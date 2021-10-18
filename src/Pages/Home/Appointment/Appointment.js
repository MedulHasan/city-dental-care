import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Appointment.css';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Appointment = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const handleAppointment = () => {
        setModalShow(true)
    }
    return (
        <div className="appointment-container">
            <h1>Make your dream smile a reality!</h1>
            <p>Call us or book your appointment today</p>
            <button onClick={handleAppointment} className="appointment-btn">Book Appointment</button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Appointment;