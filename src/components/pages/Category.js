import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCategoriesWithPosts } from '../../redux/categoriesRedux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import dateToStr from '../../utils/dateToStr';
import { Link } from 'react-router-dom';

const Category = () => {
    
    const { categoryName } = useParams();
    /*
    const categoriesWithPosts = useSelector(state => getAllCategoriesWithPosts({ categories: state.categories,
                                                                                 posts: state.posts  }));             // przekaz. refer 
    a po destrukturyzacji:
    */
    const categoriesWithPosts = useSelector(({ categories, posts }) => getAllCategoriesWithPosts({ categories, posts })); 
    
    const categoryData = categoriesWithPosts.find(category => category.name === categoryName);

    if (!categoryData) return <Navigate to='/categories'/>;
    else return (
        <section>
        <h2>{categoryName}</h2>
            <Row>
                {categoryData.posts.map(post => (
                    <Col key={post.id} className="d-flex" sm="12" md="4" lg="4">
                        <Card key={post.id} className="my-2 align-items-stretch" style={{ width: "100%" }}>
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
                                <Button variant="primary" as={Link} key={post.id} to={`/post/${post.id}`}>
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

export default Category;
