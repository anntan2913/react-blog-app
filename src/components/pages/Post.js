import { useDispatch, useSelector } from "react-redux";
import { getPostById, removePost } from '../../redux/postsRedux';
import { Navigate, useParams, Link } from "react-router-dom";
import { Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
const Post = () => {

    const { id } = useParams();

    const postData = useSelector(state => getPostById(state, id));

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const dispatch = useDispatch();

    const handleRemovePost = e =>{
        e.preventDefault();
        dispatch(removePost(id));
        handleClose();
    }

    if(!postData) return <Navigate to="/" />
    else return (
        <>
        <div className="d-flex justify-content-center">
            <Card style={{ width: '32rem', border: 'none' }}>            
                <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                        <Card.Title>{postData.title}</Card.Title>
                        <div className="d-flex align-items-center justify-content-between">
                            <Button variant="outline-info" className="mx-2" as={Link} key={id} to={`/post/edit/${id}`}>Edit</Button>
                            <Button variant="outline-danger" className="mx-2"  onClick={handleShow}>Delete</Button>
                        </div>
                    </div>
                    <Card.Text>
                    <strong>Author: </strong>{postData.author}
                    <br/>
                    <strong>Published: </strong>{postData.publishedDate}
                    <br/>
                    <br/>
                    {postData.content}
                    </Card.Text>                
                </Card.Body>
            </Card>         
        </div>
       <Modal 
            show={show}
            onHide={handleClose}
            style={{ width: "120w" }}            
            >
       <Modal.Header closeButton>
         <Modal.Title>Are you sure?</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         This operation will completely remove this post from the app. 
         <br/>
         Are you sure you want to do that?
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>Cancel</Button>
         <Button variant="danger" onClick={handleRemovePost}>Remove</Button>
       </Modal.Footer>
     </Modal>
     </>
    );
}
export default Post;