import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Addmovie({ movies, setmovies }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
        name: '', posterurl: '', description: '', rating: ''
    })
    const add = () => { setmovies([...movies, newmovie]) }
    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{ backgroundColor: "red", color: "white", border: "none" }}>
                Add
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie name" onChange={(e) => setnewmovie({ ...newmovie, name: e.target.value })} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie image</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie name" onChange={(e) => setnewmovie({ ...newmovie, posterurl: e.target.value })} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie description</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie description" onChange={(e) => setnewmovie({ ...newmovie, description: e.target.value })} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie rating</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie rating" onChange={(e) => setnewmovie({ ...newmovie, rating: e.target.value })} />

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={()=>{add();handleClose()}} variant="primary" style={{ backgroundColor: "red", color: "white", border: "none" }}>add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addmovie