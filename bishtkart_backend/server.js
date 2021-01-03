import express from 'express';
import DATA from './data.js';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/products', (req, res) => {
    res.send(DATA.products)
})

app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})