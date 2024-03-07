import {Col, Row} from "react-bootstrap";

export default function OauthSignup() {
    return (
        <>
            <Row>
                <Col xs>First, but unordered</Col>
                <Col xs={{ order: 12 }}>Second, but last</Col>
                <Col xs={{ order: 1 }}>Third, but second</Col>
            </Row>
        </>
    )
}