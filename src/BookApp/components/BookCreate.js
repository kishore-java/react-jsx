import { useContext, useState } from "react"
import BooksContext from "../context/books";



function BookCreate(){
      
   const [title , setTitle] = useState('');
   const {handleCreate} = useContext(BooksContext)

    const handleInputChange = (e) =>{
      setTitle(e.target.value)
    }

  const hanldeSubmit = (e) =>{
    e.preventDefault();
    handleCreate(title);
      setTitle('');
  }
    return <div className="book-create">
        <form onSubmit={hanldeSubmit}>
            <h3>Add book title</h3>
            <label>Title</label>
            <input className='input' onChange={handleInputChange} value={title}/>
            <button className="button">create</button>
        </form>
    </div>
}

export default BookCreate