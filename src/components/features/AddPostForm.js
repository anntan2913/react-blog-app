import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addPost } from "../../redux/postsRedux";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState ('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    
    const handleAddPost = e => {
        e.preventDefault();        
        dispatch(addPost({ id: shortid.generate(), title, author, publishedDate, shortDescription, content }));
        navigate('/');      
    };

    return(
        <form onSubmit={handleAddPost} >
            <div style={{ width: '50%' }}>
                <Form.Group className="mb-4" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)}  />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)}  />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Published</Form.Label>
                    <Form.Control type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}  />
                </Form.Group>
            </div>
            <div style={{ width: '100%' }}>
                <Form.Group className="mb-4">
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)}  />                
                </Form.Group>
                <Form.Group className="mb-4">
                <Form.Label>Main content</Form.Label>
                <Form.Control as="textarea" rows={9} placeholder="Leave a comment here" value={content} onChange={e => setContent(e.target.value)}  />
                </Form.Group>                
            </div>
            <Button variant="primary" type="submit" className="mb-4">Add Post</Button>            
        </form>
    );
};

export default AddPostForm;