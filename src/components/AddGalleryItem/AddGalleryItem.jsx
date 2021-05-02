import '../AddGalleryItem/AddGalleryItem.css'
import {useState} from 'react';
import axios from 'axios';


function AddGalleryItem({ getGalleryList }) {
    const [imagePath, setImagePath] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    const [imageLikes, setImageLikes] = useState(0);

    const addGalleryItem = (newImage) => {
        newImage.preventDefault();
        console.log('Submitted:', imagePath, imageDescription, imageLikes);
        
        axios.post('/gallery', {path: imagePath, description: imageDescription, likes: imageLikes})
        .then(response => {
          console.log('You submitted an image!', response);
          getGalleryList();
        })
        .catch(error => {
          console.log('Something went wrong submitting image', error);
          alert('Sorry, something went wrong on the submit.')
        })
      }
  



    return(
        <div className="form">
           <form>
               <input type="url" placeholder="Image URL" onChange={(event) => setImagePath(event.target.value)}/>
               <input type="text" placeholder="Description" onChange={(event) => setImageDescription(event.target.value)}/>
               <button type="submit" onClick={addGalleryItem}>Add Image</button>
           </form>
        </div>
    )


}

export default AddGalleryItem