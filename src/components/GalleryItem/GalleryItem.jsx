import './GalleryItem.css';
import {useState} from 'react';


function GalleryItem({image, upLikes }) {

    let [imageClick, setImageClick] = useState(false)
    
         
    const toggleImage = () => {
        console.log('You clicked the image');
        console.log(imageClick);
        // conditional to set up toggle between image and description
        if( imageClick === false ) {
        setImageClick(true)
        } else {
        setImageClick(false)
        }
    }



    
    
    
    return(
        <div className="oneImage">
        <div onClick={() => toggleImage()} >{ !imageClick ? <img src={image.path}/> : <section className="description" >{image.description}</section> }</div>
        <div ><button type="submit" onClick={() => upLikes(image)}>Love It!!</button> {image.likes === 1 ? <p>{image.likes} person loves this!</p> : <p>{image.likes} people love this!</p>}</div></div>
    )}



export default GalleryItem