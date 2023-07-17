import { Container, Col, Row } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Posts from "../features/Posts";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Container>
            <Row>
                <Col sm={9}><h2>All posts</h2></Col>                
                <Col sm={3} className="text-end text-nowrap mb-3">
                <Button variant="outline-info" as={Link} to="/post/add">Add post</Button>
                </Col>           
            </Row>
            <Posts />
        </Container>
        </>
    );
};

export default Home;