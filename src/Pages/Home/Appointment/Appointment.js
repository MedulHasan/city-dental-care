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
                    Make your Appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="entre-form">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div className="row g-3">
                        <div className="col">
                            <label for="inputPassword2" className="visually-hidden">Email</label>
                            <input type="email" className="form-control" id="inputPassword2" placeholder="Email" />
                        </div>
                        <div className="col">
                            <label for="inputPassword2" className="visually-hidden">Phone</label>
                            <input type="password" className="form-control" id="inputPassword2" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="row g-3 my-3 mx-1">
                        <select className="col form-select me-3" aria-label="Default select example">
                            <option selected>Select a Service</option>
                            <option value="1">Dental Fillings</option>
                            <option value="2">Root Canal Treatment</option>
                            <option value="3">Teeth Whitening</option>
                            <option value="3">Tooth Extracting</option>
                            <option value="3">Routing Dental Exam</option>
                            <option value="3">Orthodontics</option>
                        </select>
                        <select className="col form-select" aria-label="Default select example">
                            <option selected>Select a Doctor</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Write something for your problem</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button>Send</Button>
            </Modal.Footer>
        </Modal >
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