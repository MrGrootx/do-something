To Create mysql table

CREATE TABEL tablename (
   userid INI,
   first_name VARCHAR(20),
   last_name VARCHAR(20),
   salary DECIMAL(5,3),
   hire_data DATE,
)

To Rename the table
SELECT * FROM playerList  <- table name

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