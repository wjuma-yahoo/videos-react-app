import axios from 'axios';

const KEY = "AIzaSyAmOTM6hic6KAFfQy70P8BGh-z9ikjbGZU"; 

export const Youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})

