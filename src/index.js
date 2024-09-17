//import react libraries
import React from "react"; // what a component is and how multiple comps work together.
import  ReactDOM  from "react-dom/client"; // how to get up comp and show it in browser.
import AppThree from "./PicsApp/AppThree";
// import searchImages from "./PicsApp/api";
import Appfour from "./BookApp/Appfour";
// import BooksContext from "./BookApp/context/books";
import { Provider } from "./BookApp/context/books";



// searchImages('cars')
//get a reference to the div id with root
const el = document.getElementById('root');

//tell react to take control of element
const root = ReactDOM.createRoot(el);


//show component on screen
root.render(
<Provider>
<Appfour/>
</Provider>

)
