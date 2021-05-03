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
    ('https://file.kelleybluebookimages.com/kbb/base/evox/ExtSpP/5802/2009-Honda-Fit-360SpinFrame_5802_032_2400x1800_nologo.png', 'I drive a Honda Fit!!.', 0),
    ('https://pbs.twimg.com/profile_images/1166453750858432519/JR4WdwWf_400x400.jpg', 'Dogwood Coffee is my favorite.', 0),
    ('images/Wedding.jpg', 'My wife, Becky, and I at our wedding.', 0),
    ('https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg', 'I have always loved SNES and I finally beat Zelda this winter!', 0),
    ('images/Sticks.jpg', 'These are my regular tools for any drumming gig I have.', 0),
    ('images/Flowers.jpg', 'My wife is a florist and has her own business: Pansy Floral.', 0),
    ('images/Apartment.jpg', 'This is the current state of my apartment living room (as of 5/2/2021).', 0);







    
