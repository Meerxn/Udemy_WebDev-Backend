/* Intro to SQL Commands such as CREATE TABLE and INSERT DATA*/




-- Create Table
CREATE TABLE prod (
    ID INT NOT NULL,
    name STRING,
    price MONEY,
    PRIMARY KEY (ID)
);


-- Inserting into table

INSERT INTO prod
VALUES(1,"Pen",1.20);


-- Skipping if we have some missing col vals
INSERT INTO prod (id,name)
VALUES(2,"pencil");
​

-- Cannot do this as id is null
INSERT INTO prod (name,price)
VALUES("pencil",6.0);
​

/* Intro to SQL Commands such as Reading selecting and finding DATA*/


-- Reading certain columns
SELECT id, name,
FROM prod;


-- Reading all from table
SELECT * FROM prod ;

-- Inorder to sort by a value/ field ( aka extracting a row we would use WHERE)


SELECT * FROM prod 
WHERE id = 1; -- we can use various conditional statement to find ranges of values



/* Updating DATA*/


UPDATE prod
SET price = 0.8
WHERE id = 2;


/* Add column using ALTER*/

ALTER TABLE prod
ADD stonks INT;


-- Challenge: Change from NULL

UPDATE prod
SET stonks = 32
WHERE id = 1;

UPDATE prod
SET stonks = 12
WHERE id = 2;

-- Challenge works hence completed


/* Delete in SQL*/
DELETE FROM  prod
WHERE id = 2 -- make sure to add this where statement



/* Relationships in SQL*/


-- Creating table which has relationships to customers and products with foreign keys 

CREATE TABLE orders (
  ID INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT, 
  PRIMARY KEY(ID), 
  FOREIGN KEY(customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES prod(id) 
  );


--  We will learn how to join tables using these relationships using INNER JOIN

-- First we add values into orders 
INSERT INTO orders
VALUES (1,4362,2,1)


-- Next we use Inner join 

SELECT orders.order_number, customers.first_name, customers.last_name -- Select which fields to link 
FROM orders -- select what field has the foreign keys
INNER JOIN customers ON orders.customer_id = customers.id -- What to match on


-- Challenge: do the same but on products
SELECT orders.order_number, prod.name, prod.price -- Select which fields to link 
FROM orders -- select what field has the foreign keys
INNER JOIN customers ON orders.product_id = prod.id -- What to match on
  


  