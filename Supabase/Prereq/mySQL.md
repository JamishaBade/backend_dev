# Database (MySQL)

Database is a collection of data in a format tha can be easily accessible.
There are two types of databases: Relational and Non-relational

Relational Databases stores data in tables. (examples are MySQL, oracle, postgreSQL)
Non- relational databases dont store data in tables. (mongoDB)


## SQL (structured query language)
it is used to perform CRUD operations.
Create
Read
Update
Delete

## Notes for MySQL

### Create a database
```
CREATE DATABASE db_name;
```

### Delete/drop a database
```
DROP DATABASE db_name;
```

### Creating first table

go to the database
```
USE db_name
```

```
CREATE TABLE table_name
(
    column_name datatype constraints,
    column_name2 datatype constraints,
    column_name3 datatype constraints,

);
```
Example:

```
CREATE TABLE studentLog
(
    id INT PRIMARY KEY,
    name VARCHAR(50),
    gradeLevel INT NOT NULL
)
```
### Insert data in the Table
Method 1:
```
INSERT INTO table_name VALUES (parameter, parameter, parameter);

INSERT INTO studentLog VALUES (1,"Jamisha", 11);
INSERT INTO studentLog VALUES (2,"Sambhav", 11);
```

Method 2:
```
INSERT INTO studentLog
(id, name, gradeLevel)
VALUES
(1,"Jamisha",11),
(2,"Mira",0),
(3,"Monkey", "10"),

```

### Print the table
```
SELECT * FROM studentLog;
SELECT id, gradeLevel FROM studentLog;
```


## Keys
- Primary Key: uniquely identifies the row. Only one primary key and cannot be null.
- Foreign Key: It refers to the primary key of other rows. There can be duplicates, multiple FKs and also can be null.

## Constraints
It is used to specify rules for data in a table

1. NOT NULL - column cannot have a null value
2. UNIQUE - all values in column are unique.
3. PRIMARY KEY - makes a column and not null but only used for one.


#### Compound constraints

#####  Primary Key
while creating a table you can put compound constraints 
```
CREATE TABLE companyName
(
    id INT,
    companyName VARCHAR(50),
    CEO VARCHAR(50),
    PRIMARY KEY (id, CEO)
)
```

```
INSERT INTO companyName
(id, companyName, CEO)
VALUES
(101, "Duolingo", "Luis"),
(102, "reCAPTCHA", "Luis")
```

This means that the combination of the id and CEO has to be unique even if CEO or the id individually is different

##### Foreign Key
```
CREATE TABLE temp
(
    cust_id int,
    FOREIGN KEY (cust_id) references customer(id)
)

Created a table called temp
created a column called cust_id that stores integer
assigned cust_id as a Foreign key that referes to the customer id.
```

##### CHECK constraint
```
CREATE TABLE newTab
(
    age INT CHECK (age>18)
);
```