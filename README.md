What does the app have?
-----------------------------
App has three APIs 
    credential/create 
    credential/validate
    credential/reset

How to run the app?
-----------------------
1. Clone the app
2. cd to logon-flow folder
3. Run npm install
4. Run npm start

mysql setup:
-----------------------
host    : "localhost",
user    : "deepa",
password: "ubuntu",
database: "logon"
table name : credentials

Table structure:
----------------------

| emailId        | varchar(255) | NO   | PRI | NULL              |                             |
| password       | char(25)     | NO   |     | NULL              |                             |
| last_logged_in | timestamp    | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |



How to test?
------------------------------
examples for APIs
------------------------
http://localhost:3001/credential/create?emailId=dajx@abc.com&password=deepa1982&repeatPassword=deepa1982
http://localhost:3001/credential/validate?emailId=dajx@abc.com&password=deepa1982
http://localhost:3001/credential/reset?emailId=dajx@abc.com

How to test unit cases using jasmine?
--------------------------------------
npm test
