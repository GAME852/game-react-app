import express from 'express';

const app = express()
const port = 3000

let books = [
    { id: '1', title: '1984', author: 'Ricardo Solid' },
    { id: '2', title: 'HOW TO SURVIRE IN SCHOOL 101', author: 'GAME EI EI' },
];

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.post('/api/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: String(books.length+1), title, author };
    books.push(newBook);
    res.status(201).json(newBook);
})

app.listen(port, () => {
console.log( `Example app listening on port ${port}`)
})