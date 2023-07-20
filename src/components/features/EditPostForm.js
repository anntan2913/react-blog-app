import { useParams, useNavigate, Navigate } from 'react-router-dom';
import  { useSelector, useDispatch } from 'react-redux';
import { getPostById, editPost } from '../../redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = () => {

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id)); //Pobranie postu o id...

    const dispatch = useDispatch();
    const navigate = useNavigate();
        
    const handleEditPost = post => {           
        dispatch(editPost({ ...post, id}));
        navigate('/');      
    };

    if(!postData) return <Navigate to="/" />
    else return(
        <PostForm action={handleEditPost} actionText='Edit post' 
            title={postData.title} author={postData.author} publishedDate={postData.publishedDate}
            shortDescription={postData.shortDescription} content={postData.content} />            
    );
};

export default EditPostForm;

 //Podobnie jak w <List> (to-do) i
 //if(!listData) return <Navigate to="/" /> spr, czy listData jest: 
//tak-to render div jak zwykle,
//nie-to render <Navigate> do "/" 

//tu form zamiast submit - mamy akcję pod action! ( action={handleEditPost})