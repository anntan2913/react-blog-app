import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategoryByIdWithPosts } from '../../redux/categoriesRedux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import dateToStr from '../../utils/dateToStr';
import { Link } from 'react-router-dom';

const Category = () => {
    
    const { id } = useParams();
    /*
    const categoriesWithPosts = useSelector(state => getAllCategoriesWithPosts({ categories: state.categories,
                                                                                 posts: state.posts  }));             // przekaz. refer 
    1. a po destrukturyzacji:    
    const categoriesWithPosts = useSelector(({ categories, posts }) => getAllCategoriesWithPosts({ categories, posts })); 
        
    2. korekta: po zmianach w categoriesRedux (nowy selektor getCategoriesByIdWithPosts) jest niepotrzebne;
    korekta const categoryData:    
    const categoryData = categoriesWithPosts.find(category => category.name === categoryName);
    */

    const categoryData = useSelector((state) => getCategoryByIdWithPosts(state, id));

    if (!categoryData) return <Navigate to='/categories'/>;
    else return (
        <section>
        <h2>{categoryData.name}</h2>
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
                                    {categoryData.name}
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
