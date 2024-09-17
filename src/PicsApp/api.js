import axios from "axios";

const searchImages = async (term) =>{
const response = await axios.get('https://api.unsplash.com/search/photos',{
    
        headers:{Authorization: "Client-ID _Ee-zHo8Ka8K3HJ2zp5rI_hmZuCCKKf78r6lE-lOHhs"},
        params:{
          query:term
        }

     
})
// console.log(response)
return response;
}

export default searchImages