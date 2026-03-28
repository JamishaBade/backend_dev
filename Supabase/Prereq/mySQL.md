# Database
## relational database

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
```