import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryByName } from "../../redux/categoriesRedux";
import { Navigate } from "react-router-dom";
import CategoryPosts from "../features/CategoryPosts";


const Category = () => {
    
    const { categoryName } = useParams();
    const categoryData = useSelector(state => getCategoryByName(state, categoryName));
    console.log(categoryData); 

    if(!categoryData) return <Navigate to="/categories" />
    else return (
        <>
        <h2>{categoryName}</h2>
        <CategoryPosts  categoryName={categoryName}  />
        </>
    );
};

export default Category;
