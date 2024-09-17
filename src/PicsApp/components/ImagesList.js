import ImageShow from './ImageShow'
import './SearchBar.css'

function ImagesList({images}){
 
    const renderedImages = images.map ((image) => <ImageShow image={image}/>)

    return <div className='image-list'>{renderedImages} </div>
}

export default ImagesList