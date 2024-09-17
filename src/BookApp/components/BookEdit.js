import { useState, useContext } from "react"
import BooksContext from "../context/books";


function BookEdit({book , onSubmit}){

   const [title ,setTitle] = useState(book.title);
   const{ editByBookId} = useContext(BooksContext);

   const handleChange = (e) =>{
    setTitle(e.target.value);

   }
   const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit();
    editByBookId(book.id , title)

   }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" onChange={handleChange} value={title}/>
        <button className="button is-primary">
            save
        </button>

    </form>
}

export default BookEdit