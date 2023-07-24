
const initialState = {
    
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe'
        },

        {
            id: '2',
            title: 'Mount St. Helens',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('27-06-2023'),
            author: 'Jane Doe'
        },

        {
            id: '3',
            title: 'Yellowstone Caldera',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('06-07-2023'),
        },
        {
            id: '4',
            title: 'Mount Vesuvius',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('16-07-2023'),
            author: 'Plinius Pompei'
        }
     ],
};
    
export default initialState;