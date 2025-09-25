import { useState } from "react";

export default function AddBook() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');

    const handleSubmit =  async (e:any) => {
        e.preventDefault();
        try {
            //Add a new book APIs
            const resAddBook = await fetch(`http://localhost:3000/api/insert`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title: inputTitle, author: inputAuthor })
                }
            );
            const result = await resAddBook.json();
            alert ('Add a new book ID: ' + result.id); 
        }catch (error) {
            alert ('Error submitting data:' + error);
        }
    
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>ชื่อหนังสือ:</label>
            <input type="text" value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)} />

            <label>ชื่อผู้แต่ง:</label>
            <input type="text" value={inputAuthor}
            onChange={(e) => setInputAuthor(e.target.value)} />

            <button type="submit">Add Book</button>
            </form>
        );
}