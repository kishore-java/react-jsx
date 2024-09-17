import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
import { useState } from "react";

import './AnimalShow.css'
  



function AnimalShow({type}){
  const [clicks  , setClicks] = useState(0);
   const animalObj = {
      bird, cat, cow, dog, gator
   };

 const handleClick = () =>{
   setClicks( clicks + 1);
 }
 return <div  className='animal-show' onClick={handleClick}>
    <img src={animalObj[type]} alt="animal" className='animal'/>
    <img src={heart} alt="heart" style={{width : `${10 + 10 * clicks}px`}} className='heart'/>
 
 </div>
}

export default AnimalShow