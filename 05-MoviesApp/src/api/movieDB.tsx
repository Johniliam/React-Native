import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f7e89095a2e5d413ccfdcc84a528c5f6',
        language: 'es-MX'
    }
});

export default movieDB;