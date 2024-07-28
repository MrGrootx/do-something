To Create mysql table

CREATE TABEL tablename (
userid INI,
first_name VARCHAR(20),
last_name VARCHAR(20),
salary DECIMAL(5,3),
hire_data DATE,
)

To Rename the table
SELECT \* FROM playerList <- table name

To Drop player
DROP TABLE tablename

To Rename the Table
RENAME TABLE tablename TO newtablename

To Alter table
ALTER TABLE tablename
ADD phone_number VARCHAR(15)

To modify the Table COLUMN
ALTER TABLE playerList # get the table name
MODIFY COLUMN last_name VARCHAR(32)

# Main Part

To intert value into tables
INSERT INTO playerList
VALUES (1, "mr","Groot",30.50,"2024-5-2")

# if we want to insert rows without couple datas

INSERT INTO playerlist(userid,fist_name,last_name)
VALUES (6,"maddy","melow")

# How to select data from a Table

SELECT \* FROM tablename # it will get everydatas from that table

# Select particular values form tables

SELECT \* FROM playerlist WHERE first_name = "mr"

EX : [
SELECT \* FROM EMPLOYEE WHERE empId != 1

---

-- create
CREATE TABLE EMPLOYEE (
empId INTEGER PRIMARY KEY,
name TEXT NOT NULL,
dept TEXT  
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Clark', 'Sales');
INSERT INTO EMPLOYEE VALUES (0002, 'Dave', 'Accounting');
INSERT INTO EMPLOYEE VALUES (0003, 'Ava', NULL);

-- fetch
SELECT * FROM EMPLOYEE WHERE dept IS NULL
]
