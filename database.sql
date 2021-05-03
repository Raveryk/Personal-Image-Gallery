CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path varchar(255),
	description varchar(255),
	likes INTEGER
);

INSERT INTO "images" ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0 ),
    ('images/Drums.jpg', 'My drums set up at a recent gig.', 0),
    ('images/Family.jpg', 'My parent''s backyard the evening of my wedding on 8/7/2020. It was during COVID and we made it a very small outdoor celebration.', 0),
    ('https://images-na.ssl-images-amazon.com/images/I/91aFNp1FLML.jpg', 'I love to cook and bake and this book has guided my sourdough bread baking.', 0),
    ('images/Duluth.jpg', 'I love to hike whenever I get the chance. This is the lookout on Ely''s Peak near Duluth, MN.', 0),
    ('images/Running.jpg', 'In the last year I have adopted running and love it! These are my shoes.', 0),
    ('images/Car.jpg', 'I drive a Honda Fit!!.', 0),
    ('images/Coffee.jpg', 'Dogwood Coffee is my favorite.', 0),
    ('images/Wedding.jpg', 'My wife, Becky, and I at our wedding.', 0),
    ('images/Zelda.jpg', 'I have always loved SNES and I finally beat Zelda this winter!', 0),
    ('images/Sticks.jpg', 'These are my regular tools for any drumming gig I have.', 0),
    ('images/Flowers.jpg', 'My wife is a florist and has her own business: Pansy Floral.', 0),
    ('images/Apartment.jpg', 'This is the current state of my apartment living room (as of 5/2/2021).', 0);







    
