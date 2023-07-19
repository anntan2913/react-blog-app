import AddPostForm from "../features/AddPostForm";

const AddPost = () => {
    return (
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
        <h2>Add Post</h2>
        <AddPostForm/>
        </div>
    );
};

export default AddPost;