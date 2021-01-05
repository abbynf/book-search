import axios from 'axios';
import Format from './../utils/Format';

// eslint-disable-next-line
export default {
    searchTitle: function(title) {
        let url = "https://www.googleapis.com/books/v1/volumes?q=" + title;
        return axios.get(url)
    },
    saveTitle: function(volume) {
        const info = volume[0].volumeInfo;
        const rightLink = Format(volume[0].id, info.title)
        return axios.post('/api/books', {
            title: info.title,
            author: info.authors[0],
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