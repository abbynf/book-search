import axios from 'axios';
import Format from './../utils/Format';

// eslint-disable-next-line
export default {
    searchTitle: function(title) {
        const url = "https://www.googleapis.com/books/v1/volumes?q=" + title;
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
    }
};