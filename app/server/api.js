import express from 'express';
import cors from 'cors';

//Connect to Firebase Database
import admin from 'firebase-admin';
import serviceAccount from './firebase/webprog-1011-5-firebase-adminsdk-fbsvc-8c33a146e2.json' with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

//Get data from Books collection
async function fetchDataDB(){
    const result = [];
    const booksRef = db.collection('Books');
    const booksSnap = await booksRef.get();
    booksSnap.forEach(doc => {
        result.push({
            id: doc.id,
            ...doc.data()
        });
    })
    return result;
}

//http://localhost:3000/api/getBooksFromDB
app.get('/api/getBooksFromDB', (req, res) => {
    res.set('Content-Type', 'application/json');
    fetchDataDB().then((jsonData) => {
        res.json(jsonData);
    }).catch((error) => {
        res.json(error);
    });
});

// http://localhost:3000/api/insert --> Add a new book
async function addBook(newBook) {
  const newBookRef = db.collection('Books').doc();
  const docRef = db.collection('Books').doc(newBookRef.id);
  await docRef.set(newBook);
  console.log('Book added!');
}
 
app.post('/api/insert', (req, res) => {
  try {
    const { title, author } = req.body;
    console.log(title, author);
    const newBook = { id: String(books.length + 1), newBook };
    // books.push(newBook);
    addBook(newBook);
    res.status(201).json({ success: true, message: 'Form submitted successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
})

let books = [
    { id: 1, title: '1984', author: 'Ricardo Solid' },
    { id: 2, title: 'HOW TO SURVIRE IN SCHOOL 101', author: 'GAME EI EI' },
];

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.post('/api/insert', (req, res) => {
    const { title, author } = req.body;
    console.log(title, author);
    const newBook = { id: String(books.length+1), title, author };
    books.push(newBook);
    
    res.status(201).json(newBook);
})

// http://localhost:3000/api/getBooks
app.get('/api/getbooks', (req, res) => {
    res.json(books);
})

// http://localhost:3000/api/getBooks/1
app.get('/api/getbooks/:book_id', (req, res) => {
    let bid = Number(req.params.book_id);
    const result = books.filter(
        bObj => {
            return bObj.id === bid
        }
    );
    console.log(result);
    res.json(result[0]);
})

// http://localhost:3000/api/update
    app.post('/api/update', (req, res) => {
        const { id, in_title, in_author } = req.body;
        console.log('Data:', id, in_title, in_author);
        const updBooks = books.map(
            bObj => {
                if(bObj.id === Number(id)){
                    return {...bObj, title: in_title, author: in_author};
                }
                return bObj;
            }
        );
        console.log('Updated:' + updBooks);
        res.json({messeage: 'Update successful!!'});
    })

app.listen(port, () => {
console.log( `Example app listening on port ${port}`)
})