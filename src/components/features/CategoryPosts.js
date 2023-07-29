import { useSelector } from 'react-redux';
import { getAllPosts, getPostsFilteredByCat } from '../../redux/postsRedux';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import dateToStr from '../../utils/dateToStr';
import { Link } from "react-router-dom";

const CategoryPosts = () => {

    const { categoryName } = useParams();

    const posts = useSelector(state => getAllPosts(state));
    const postsByCategory = posts.filter(post => post.category === categoryName);
    //console.log(postsByCategory);

    if (postsByCategory.length === 0)
    return (
        <h4>No posts here yet</h4>);

    else return(
        <section>
        <Row>
            {postsByCategory.map(post => (
            <Col key={post.id} className='d-flex' sm='12' md='4' lg='4'>
                <Card key={post.id} className='my-2 align-items-stretch' style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    <strong>Author: </strong>
                    {post.author}
                    <br />
                    <strong>Published: </strong>
                    {dateToStr(post.publishedDate)}
                    <br />
                    <strong>Category: </strong>
                    {categoryName}
                    <br />
                    <br />
                    {post.shortDescription}
                    </Card.Text>
                    <Button variant='primary' as={Link} key={post.id} to={`/post/${post.id}`}>
                    Read more
                    </Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </section>
    );
};

export default CategoryPosts;