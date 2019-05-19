What does the app have?

app has three APIs 
    credential/create 
    credential/validate
    credential/reset

How to run the app?

Clone the app
cd to logon-flow folder
Run npm install
Run npm start

Run the following in mysql:
host    : "localhost",
user    : "deepa",
password: "ubuntu",
database: "logon"
table name : credentials

Table structure:
+----------------+--------------+------+-----+-------------------+-----------------------------+
| Field          | Type         | Null | Key | Default           | Extra                       |
+----------------+--------------+------+-----+-------------------+-----------------------------+
| emailId        | varchar(255) | NO   | PRI | NULL              |                             |
| password       | char(25)     | NO   |     | NULL              |                             |
| last_logged_in | timestamp    | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
+----------------+--------------+------+-----+-------------------+-----------------------------+


How to test?
examples for APIs
http://localhost:3001/credential/create?emailId=dajx@abc.com&password=deepa1982&repeatPassword=deepa1982
http://localhost:3001/credential/validate?emailId=dajx@abc.com&password=deepa1982
http://localhost:3001/credential/reset?emailId=dajx@abc.com

How to test unit cases using jasmine?
npm test
