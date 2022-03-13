import axios from 'axios';

const KEY = "AIzaSyAmOTM6hic6KAFfQy70P8BGh-z9ikjbGZU"; 

const axiosCreate = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

export default axiosCreate;