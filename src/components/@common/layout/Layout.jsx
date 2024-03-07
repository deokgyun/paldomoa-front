import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Container from "react-bootstrap/Container";

export default function Layout({children}) {
    return (
        <>
            <Header/>

            <Container>
                {children}
            </Container>

            <Footer/>
        </>
    )
}