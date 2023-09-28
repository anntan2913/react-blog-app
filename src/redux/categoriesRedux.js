//selectors
export const getAllCategories = ({ categories }) => categories;
//export const getCategoryById = ({ categories }, categoryId ) => categories.find(category => category.id === categoryId);
export const getCategoryByName = ({ categories }, categoryName ) => categories.find(category => category.name === categoryName);
//export const getAllCategoriesWithPosts = ({ categories, posts }) => categories.map(category => ({ ...category, posts:
//  posts.filter(post => post.categoryId === category.id) }));
export const getCategoryByIdWithPosts = ({ categories, posts }, categoryId) => ({
    ...categories.find(category => category.id === categoryId),
    posts: posts.filter(post => post.categoryId === categoryId)
  });

//action creators
const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {       
      default:
        return statePart;
    };
  };
  
  export default categoriesReducer;