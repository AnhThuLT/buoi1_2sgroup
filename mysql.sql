create database mydatabase;
SELECT * FROM demo;
CREATE TABLE Category(category_id INT Auto, name NVARCHAR(255), PRIMARY KEY (category_id));
CREATE TABLE Item (
 ID INT AUTO_INCREMENT PRIMARY KEY,
 name NVARCHAR(255) NOT NULL,
 quantity INT CHECK (quantity > 0),
 category INT,
 FOREIGN KEY (category) REFERENCES Category(ID)
);
INSERT INTO Category VALUES (1,'ao' ),(2,'quan'),(3,'vay');
INSERT INTO Item(name, quantity,category) VALUES('ao thun',5,1), 
('ao dai ',1,1), ('quan dui ',10,2 ),('mu bao hiem ',2,Null);
select * from Item WHERE quantity >5;
SELECT * FROM Item;
SELECT * FROM Category;
SELECT *FROM Item INNER JOIN Category ON Item.category=Category.category_id;
SELECT *FROM Item RIGHT JOIN Category ON Item.category= Category.category_id;
SELECT*FROM Item WHERE category=1;
SELECT SUM (quantity),Category.name FROM Item JOIN Category ON Item.category=Category.category_id GROUP BY category_id;


