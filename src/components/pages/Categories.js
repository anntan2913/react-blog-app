import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../redux/categoriesRedux";

const Categories = () => {

    const categories = useSelector(getAllCategories);

    return (
        <section>
        <h2 style={{ marginLeft: '230px' }}>All Categories</h2>
        <div className="d-flex justify-content-center">
        <ListGroup style={{ width: '42rem', border: 'none' }}>
            {categories.map(cat =>(
                <ListGroupItem key={cat.id}>
                    <Link key={cat.id} to={`/category/${cat.id}`}>{cat.name}</Link>
                </ListGroupItem>
                ))
            }
        </ListGroup>
        </div>
        </section>
    );
};

export default Categories;

