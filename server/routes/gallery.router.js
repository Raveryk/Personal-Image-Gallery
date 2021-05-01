const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let sqlText = `UPDATE "images" SET "likes" = "likes"+1 WHERE "id"=$1;`;

    pool.query(sqlText, [galleryId])
    .then(response => {
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //         }
    //     }
        res.sendStatus(200);
        console.log('Succesfully UPDATEd Likes:', response)
    })
    .catch(error => {
        console.log('Error updating likes:', error);
        res.sendStatus(500);
    })
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "images" ORDER BY "id";`;
    pool.query(sqlText)
    .then(result => {
    res.send(result.rows);
    })
    .catch(error => {
    console.log('Error GETting images from DB:', error);
    res.sendStatus(500);
    })
    
}); // END GET Route

router.post('/', (req, res) => {
    let newImage = req.body;
    console.log('Adding new Image:', newImage);

    const sqlText = `INSERT INTO "images" ("path", "description")
                    VALUES ($1, $2);`;
    pool.query(sqlText, [newImage.path, newImage.description])
    .then(result => {
        res.send(201);
    })
    .catch(error => {
        console.log('Error Sending images to DB:', error);
        res.sendStatus(500)
    })
})

module.exports = router;