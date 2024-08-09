import axios from 'axios';
import express from 'express';

const app = express();

app.get('/recovery', (req, res) => {
    try {
        const data = axios.get('https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json');
    } catch (error) {

    }
})

export default app;