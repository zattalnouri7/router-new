import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Addmovie from './Addmovie';



function NavBarr({ movies, setmovies, settext, setrate }) {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" >
            <Container fluid>
                <Navbar.Brand href="#">PILOU 4 MOVIES</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"> <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link> </Nav.Link>
                        <NavDropdown title="genre" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3"><Link to='/film' style={{ textDecoration: 'none', color: 'black' }}>Film</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                <Link to='/ser' style={{ textDecoration: 'none', color: 'black' }}>Serie</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div style={{ marginRight: "20px" }}><ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        onChange={(newRating) => setrate(newRating)}
                    /></div>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => settext(e.target.value)}
                        />
                        ,<Addmovie movies={movies} setmovies={setmovies} />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBarr