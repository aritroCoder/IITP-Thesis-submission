# IITP-Thesis-submission

## How to run it
To run the web server, clone the repo into your PC. in the directory where index.js and .gitignore is present, create a file named `.env` <br>
In this file, add few lines (you need to have a mongoDB connection string and a email account with less secure app access enabled.)

<pre>
PORT = 8080
MONGODB_URI = 'your_mongodb_connection_link'
MAILID = 'your_mail_address_here'
PASSWORD = 'your_mail_password_here'
</pre>

After creating these, open terminal and type `npm i` and let the `node_modules` generate. After that type `node index` and your server should start at http://localhost:8080
