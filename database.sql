
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO item(description, image_url, user_id)
    VALUES('tokyo skype music', 'https://c8.alamy.com/comp/H3DX65/tokyo-japan-7th-oct-2016-japanese-cosmetics-giant-shiseido-employee-H3DX65.jpg', 1 ),
    ('QUEEN APPLE', 'https://cdn.shopify.com/s/files/1/1781/3871/products/crown_apple_label.jpg?v=1554781016', 1);