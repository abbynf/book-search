import axios from 'axios';

// eslint-disable-next-line
export default {
    searchTitle: function(title) {
        let url = "https://www.googleapis.com/books/v1/volumes?q=" + title;
        return axios.get(url)
    },
    saveTitle: function(volume) {
        const info = volume[0].volumeInfo;
        const rightLink = info.infoLink;
        return axios.post('/api/books', {
            title: info.title,
            author: info.authors,
            description: info.description,
            image: info.imageLinks.thumbnail,
            link: rightLink
        })
    },
    fetchSavedBooks: function() {
        return axios.get('/api/books')
    },
    deleteBook: function(id) {
        console.log(id);
        let url = '/api/books/' + id
        return axios.delete(url)
    }
};