
const initialState = {
    
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            categoryId: '2'
        },

        {
            id: '2',
            title: 'Mount St. Helens',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('06-27-2023'),
            author: 'Jane Doe',
            categoryId: '1'
        },

        {
            id: '3',
            title: 'Yellowstone Caldera',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('07-06-2023'),
            author: 'Amanda Hughes',
            categoryId: '1'
        },
        
        {
            id: '4',
            title: 'Mount Vesuvius',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('07-16-2023'),
            author: 'Plinius Pompei',
            categoryId: '3'
        }
    ],

    categories: [
        { id: '1',  name: 'News' },
        { id: '2',  name: 'Sport' },
        { id: '3',  name: 'Movie' }
    ],

};
    
export default initialState;