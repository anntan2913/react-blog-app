import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({action, actionText, ...props}) => {
    
    const [title, setTitle] = useState (props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
        
    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };
    
    return (
        <Form onSubmit={handleSubmit}>
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
            <Button variant="primary" type="submit" className="mb-4">{actionText}</Button>
        </Form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired    
};
  

export default PostForm;


/*w tym przypadku nie “przypinamy” action bezpośrednio do onSubmit na formularzu! Bo:
 Przy wykryciu próby wysyłki formularza, musimy bowiem nie tylko włączyć funkcję ukrytą pod action,
 ale co istotne też, zrobić to w taki sposób, aby otrzymała informacje o danych z pól.
 
 !! To w komponencie <AddPostForm> czy <EditPostForm> włączamy faktyczną akcję reduksową.
 Musimy wtedy przekazywać jako payload dokładne informacje, co chcemy zmienić. (Jaki  title, author ...)
 Czyli w obu komponentach potrzebujemy mieć dostęp do wartości z formularza.
 
Tu tworzymy nową osobną funkcję specjalnie do obsługi eventu submit (np. handleSubmit).
Zajmie się zatrzymaniem zachowania domyślnego, a dopiero później uruchomieniem action z odpowiednimi informacjami.
 */