# React Image Gallery


## Description

Duration: Weekend Sprint

In this project I created an image gallery containing a myriad of images from my life. The requirements were to be able to display a series of images that had been created into separate components. One component was to contain the whole gallery of images and the other component was to contain each individual photo. Each image was to be able to be clicked on to display a description using conditional rendering (and clicked again to return to the image), a like button, and text that depending upon the like button being pressed. These tasks required GET and PUT routes utilizing axios to communicate with the server. In addition to these required elements, this project also contains some extra functionality. I first added a database to store my existing photo addresses and related data and then created an input form to be able to add a URL and description to insert a new photo into the gallery (this requiring a POST route to send data to database). Next I added a delete button to delete an image from the gallery and the database (required a DELETE route). And lastly, I utilized Material UI to add some updated styling to my project. 

## Screen Shot

<img src="Screen Shot 2021-05-02 at 5.46.40 PM.png">

### Prerequisites

- Node.js
- React.js 
- Material-UI https://material-ui.com/
- Postico


## Installation

To get this application running follow the directions below:

1: Create a database named "react_gallery"
2: Input the SQL queries from the database.sql file into Postico and execute those queries
3: Open up your editor of choice with the project files and run npm install and npm install pg
4: Next, run npm install @material-ui/core to access the Material-UI styling.
5: Then run npm server and open a second terminal window to run npm run client and browser window with the app should appear!

## Usage

1. Browse through the image gallery and click on an image to make the description appear.
2. If you like an image feel free to click the 'Thumbs Up' button.
3. If you want to discard an image click the trash icon.
4. If you would like to add an image into the gallery please fill out the input fields with the necessary info and hit 'Add Image'
5. Enjoy!

## Built With
- React.js
- Material-UI


## Acknowledgement 
Thanks to Prime Digital Academy for giving me the knowledge and confidence to build this app and to try out some new things! Also many thanks to my lovely partner, Becky, for being cool with me staring at a screen for hours on end.

## Support
If you have suggestions or issues, please email me at raveryk@gmail.com