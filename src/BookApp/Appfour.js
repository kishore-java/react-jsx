import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import './index.css';
import BooksContext from "./context/books";


function Appfour(){
  
   const {fetchBooks} = useContext(BooksContext)

   useEffect(()=> {fetchBooks()},[fetchBooks])
   
    return <div className="app">
      <BookList />
       <BookCreate/>
    </div>
}

export default Appfour;