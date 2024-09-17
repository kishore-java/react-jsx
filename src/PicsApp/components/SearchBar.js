import { useState } from "react";
import './SearchBar.css'

function SearchBar({onSubmit}){
    
   const [term , setTerm ] = useState('')

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        // console.log('sunmt is called')
        onSubmit(term);

    }

    const handleChange = (e) =>{
     setTerm(e.target.value)
    }

    return <div className="search-bar">
      <form onSubmit={handleSubmitForm}>
        <input  value={term} onChange={handleChange}/>
        {/* <button >clikc</button>  */}
        </form>
        </div>

}

export default SearchBar