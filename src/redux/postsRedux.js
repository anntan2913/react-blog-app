//selectors
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');

// action creators
export const removePost = payload => ({type: REMOVE_POST, payload });
export const addPost = payload => ({type: ADD_POST, payload })

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => (post.id !== action.payload));
    case ADD_POST:
      return [...statePart, {...action.payload}];
    default:
      return statePart;
  };
};

export default postsReducer;



//w case ADD_POST: cala zawart. ktorej potrzebuje obiekt postu jest juz zdef w dispatch(w handl addPost),
//tutaj juz tylko sam payload [albo tu albo tam -id: shortid]