import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {

    const categories = useSelector(getAllCategories);
    
    const [title, setTitle] = useState (props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState(props.category || '');

    const [contentError, setContentError] = useState(false); 
    const [dateError, setDateError] = useState(false);
    
    
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if(content && publishedDate && category) {
          action({ title, author, publishedDate, shortDescription, content, category });
        }
      };
    
    return (
        <Form onSubmit={validate(handleSubmit)}>    
            <div style={{ width: '50%' }}>
                <Form.Group className="mb-4">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        {...register("title", { required: true, minLength: 4 })}                       
                       value={title} onChange={e => setTitle(e.target.value)} 
                       type="text" placeholder="Enter title"
                    /> 
                    {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 4 characters)</small>}                     
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                        {...register("author", { required: true, minLength: 4 })}                       
                        value={author} onChange={e => setAuthor(e.target.value)}
                        type="text" placeholder="Enter author"
                     /> 
                    {errors.author && <small className="d-block form-text text-danger mt-2">Author's name is too short (min is 4 characters)</small>}                    
                </Form.Group>
                <Form.Group className="mb-4">                 
                    <Form.Label>Published</Form.Label>
                    <div style={{ display: 'block' }}>
                        <DatePicker  selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
                        {dateError && <small className="d-block form-text text-danger mt-2">Date field can't be empty</small>}
                    </div>
                </Form.Group>
            </div>
            <div style={{ width: '100%' }}>
                <Form.Group className="mb-4">
                    <Form.Label>Category</Form.Label> 
                    <Form.Select value={category}  onChange={e => setCategory(e.target.value)}>
                        <option>Select category...</option>
                        {categories.map(cat =>
                        <option key={cat.id}>{cat.name}</option> )}                       
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control 
                        {...register("shortDescription", { required: true, minLength: 20 })}                    
                        value={shortDescription} onChange={e => setShortDescription(e.target.value)}
                        as="textarea" rows={3} placeholder="Leave a comment here"
                    />
                    {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Your comment is too short (min is 20 characters)</small>}                                
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>Main content</Form.Label>
                    <ReactQuill theme="snow" value={content} onChange={setContent} />
                    {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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

/*  walidacja formularza: 
onSubmit={validate(handleSubmit)} czyli w momencie wykrycia eventu submit, zwaliduj formularz i jeśli wszystko
 jest wypełnione poprawnie, to uruchom funkcję handleSubmit.
 Nie potrzeba też już e.prev.Def. - przejmuje to validate */