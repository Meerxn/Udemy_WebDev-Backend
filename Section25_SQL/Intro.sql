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

