import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from '../../components/Form';

function VideoCadastre(){
    return(
        <div>
            <Header />
            <Container>
                <Form/>
            </Container>
            <Footer />
        </div>
    )
}
export default VideoCadastre;