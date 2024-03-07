import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    function handle(){
        navigate('/board')
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to='/'>팔도모아</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/board'>게시판</Nav.Link>
                        <Nav.Link as={Link} to='/festival'>행사</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/login'>로그인</Nav.Link>
                        <Nav.Link as={Link} to='/signup'>회원가입</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}