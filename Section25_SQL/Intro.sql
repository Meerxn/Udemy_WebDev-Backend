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