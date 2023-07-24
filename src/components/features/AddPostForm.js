import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
        
    const handleAddPost = post => {           
        dispatch(addPost(post));
        navigate('/');      
    };

    return(
        <PostForm action={handleAddPost} actionText='Add post' />            
    );
};

export default AddPostForm;

//funkcja, przekazywana jako action:
// powinna ona tylko odbierać w formie argumentu informacje o poście, 
// korzystając z nich uruchamiać odpowiednią akcję w centrali,
// a na końcu przekierowywać użytkownika do strony głównej.