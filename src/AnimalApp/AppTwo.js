
import { useState } from "react"
import AnimalShow from "./AnimalShow";
import './AppTwo.css'

function getRandomAnimal(){
  const animals = ['dog', 'cat' , 'bird' , 'gator' , 'cow'] ;

  return animals[Math.floor(Math.random()* animals.length)]

}

function AppTwo(){
        
    const [animal , setAnimal] = useState([]);

    //we never modify piece of state  directly like animal.push(getRandomAnimal)

    const handleClick = () =>{
         setAnimal([...animal , getRandomAnimal()])
    }

    //rendering list of animals
    const renderList = animal.map((animal,index) => <AnimalShow key={index} type={animal}/>)

    return(
        <div className="app">
        <button onClick={handleClick}> Add Animal </button>
        <div className="animal-list">{renderList}</div>
        </div>
    )
}

export default AppTwo