 import { useState } from "react"
import searchImages from "./api"
import SearchBar from "./components/SearchBar"
import ImagesList from './components/ImagesList';

function AppThree(){

  const [images , setImages ] = useState([]);

  const handleSubmitTerm = async (term) => {
     const data = await searchImages(term)
     setImages(data.data.results)
    console.log(`do with search` , data.data)
  }
    
  return <div>
    <SearchBar onSubmit={handleSubmitTerm}/>
    <ImagesList images={images}/>

  </div>
}

export default AppThree