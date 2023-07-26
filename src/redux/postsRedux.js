import shortid from "shortid";
//selectors
export const getAllPosts = ({ posts, categories  }) => posts.map(post => ({...post, category: categories.find(cat => cat.id === post.categoryId).name}));
export const getPostById = ({ posts, categories }, id) => {
  const post = posts.find(post => post.id === id); 
  return { ...post, category: categories.find(cat => cat.id === post.categoryId).name }
}

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const removePost = payload => ({type: REMOVE_POST, payload });
export const addPost = payload => ({type: ADD_POST, payload });
export const editPost = payload => ({type: EDIT_POST, payload });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => (post.id !== action.payload));
    case ADD_POST:
      return [...statePart, {...action.payload, id: shortid()}];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;



//w case ADD_POST: cala zawart. ktorej potrzebuje obiekt postu jest juz zdef w dispatch(w handl addPost),
//tutaj juz tylko sam payload [albo tu albo tam -id: shortid]

/* w case EDIT_POST: Chcemy zwrócić nową tablicę, w której wszystkie elementy będą zmapowane w taki sposób,
 że jeśli id postu to action.payload.id, to zwracamy obiekt zmodyfikowany, a jeśli nie, to zwracamy oryginalny obiekt bez zmian.
 ten pomysł wymaga, by w action.payload faktycznie właśc. id istniała i to nie losowanie id z shortid tylko id przyporządkowane do danego obiektu poddawanego modyfikacji! 
 (W <PostForm> info o id nie ma, tylko info z pól title, author itd.)
 */

 