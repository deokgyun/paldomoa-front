import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Button, Col, Row} from "react-bootstrap";

export default function SignupInput() {
    return (
        <>
            <FloatingLabel
                controlId="floatingInput"
                label="이메일"
                className="mb-3 mt-5">
                <Form.Control type="email" placeholder="name@example.com"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="비밀번호" className="mb-3">
                <Form.Control type="password" placeholder="Password"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingName" label="이름" className="mb-3">
                <Form.Control type="text" placeholder="Name"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingNickname" label="닉네임" className="mb-3">
                <Form.Control type="text" placeholder="nickname"/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingAddress" label="주소" className="mb-3">
                <Form.Control type="text" placeholder="address"/>
            </FloatingLabel>


            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                <Col>
                    <Form.Check label="약관동의" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col>
                    <Button type="submit" onClick={signupProcess}>Sign in</Button>
                </Col>
            </Form.Group>

        </>
    )
}


function signupProcess(){
    console.log('gpgp');
}