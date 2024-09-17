import axios from "axios";
import { createContext, useCallback, useState } from "react";

const BooksContext = createContext();
function Provider({ children }) {


    const [books, setBooks] = useState([]);


    //list of new boooks added to an array and generating random UUID
    const handleCreate = async (title) => {
        //DATA PERSISTENCE through setting up server
        const response = await axios.post('http://localhost:3001/books', { title })
        console.log(`trem`, response)
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks)
        console.log(`u books`, updatedBooks)
    }

    //Fetch books
    const fetchBooks =  useCallback( async () => {
        const rspnse = await axios.get("http://localhost:3001/books")
        setBooks(rspnse.data)
        // console.log(rspnse);
    }, [])


    //deleting book by id
    const deleteBookById = async (id) => {
        // console.log(books)
        await axios.delete(`http://localhost:3001/books/${id}`)

        const filteredBooks = books.filter((book) => book.id !== id);
        setBooks(filteredBooks)
    }
    // console.log(books);

    //edit book by id
    const editByBookId = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        console.log(`uppdat`, response.data)
        const editedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }

            return book;
        })
        setBooks(editedBooks)
    }

    const valueToShare = {
        books,
        editByBookId,
        deleteBookById,
        fetchBooks,
        handleCreate
    };
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )

}

export default BooksContext;
export { Provider };