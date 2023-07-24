import { useSelector } from "react-redux";
import { getAllPosts } from '../../redux/postsRedux';
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import dateToStr from "../../utils/dateToStr";

const Posts = () => {

    const posts = useSelector(getAllPosts);

    return (
        <section> 
            <Row>  
                {posts.map(post => (
                    <Col  className='d-flex' sm='12' md='4' lg='4' > 
                        <Card key={post.id} className='my-2 align-items-stretch' style={{ width: '100%' }} >
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    <strong>Author: </strong>{post.author}
                                    <br/>
                                    <strong>Published: </strong>{dateToStr(post.publishedDate)}
                                    <br/>
                                    <br/>
                                    {post.shortDescription}                                        
                                </Card.Text>
                                <Button variant="primary" as={Link} key={post.id} to={`/post/${post.id}`}>Read more</Button>
                            </Card.Body>                                
                        </Card>                    
                    </Col>              
                ))}
            </Row>           
        </section>

        
    );
};

export default Posts;