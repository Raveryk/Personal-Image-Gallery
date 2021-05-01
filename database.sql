CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path varchar(255),
	description varchar(255),
	likes INTEGER
);

INSERT INTO "images" ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0 ),
    ('images/Drums.jpeg', 'Photo of a drum set.', 0),
    ('images/Family.jpeg', 'Photo of a family.', 0),
    ('images/Food.jpeg', 'Photo of food.', 0),
    ('images/Mountains.jpeg', 'Photo of a mountian.', 0),
    ('images/Running.jpeg', 'Photo of a runner.', 0);
    
