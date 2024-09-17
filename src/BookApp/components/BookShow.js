import { useContext, useState } from "react"
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";



function BookShow({book }){
 
    const [showEdit , setShowEdit] = useState(false);
  
    const{ editByBookId,
      deleteBookById,} = useContext(BooksContext);
    

    const handleDeleteClick = () => {

       deleteBookById(book.id)
    }

    const handleEditClick = () =>{
      setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
      // onEdit(id , title);
      setShowEdit(false)
    }
      
    let content = <h3>{book.title}</h3>;
    if(showEdit){
      content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }
    return <div className="book-show">{content}
    <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt='books'/>
    <div className="actions">
      <button className="edit" onClick={handleEditClick}>
         Edit
      </button>
     <button className="delete" onClick={handleDeleteClick}>
        Delete
     </button>
    </div>
     
    </div>
}

export default BookShow