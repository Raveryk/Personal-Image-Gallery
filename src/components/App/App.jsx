import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';

function App() {

  useEffect(() => {
    getGalleryList()
  }, []);

  // Array to store all of the photos from the server
  const [galleryList, setGalleryList] = useState([]);

  //GET route to retrieve images from server
  const getGalleryList = () => {
    axios.get('/gallery')
    .then(response => {
      console.log(response.data);
      setGalleryList(response.data);
    })
    .catch(error => {
      alert('Error getting images.')
      console.log('Something went wrong GETting data from server:', error);
    })
  }


  // Handle submit button and PUT
  const upLikes = ( image, event ) => {
    // event.preventDefault();

    console.log('You pressed the like button');

    axios.put(`/gallery/like/${image.id}`)
    .then(response => {
      image.likes += 1;
      getGalleryList();
    })
    .catch(error => {
      alert('Could not update Like button');
      console.log('Error updating Likes', error);
    })
    
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} upLikes={upLikes}/>
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
