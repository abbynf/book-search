import axios from 'axios';

export default {
    searchTitle: function(title) {
        const url = "https://www.googleapis.com/books/v1/volumes?q=" + title;
        return axios.get(url)
    }
};