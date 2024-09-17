
// import { useContext } from 'react';
import BookShow from './BookShow';
// import BooksContext from '../context/books';
import UseBooksContext from '../hooks/use-books-context';
function BookList(){

    const {books}= UseBooksContext();
   const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book}/>
   })
    return <div>
        {/* <div>{num.count}</div> */}
      {/* <button onClick={num.incrementCount}>click</button> */}
    {renderedBooks}
    </div>
}

export default BookList