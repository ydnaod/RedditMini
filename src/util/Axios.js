import axios from 'axios'

const instance = axios.create({
    baseURL: "https://www.reddit.com/",
});

//instance.get('/popular/.json');

export default instance;