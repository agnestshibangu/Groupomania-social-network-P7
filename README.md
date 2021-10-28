# P7_01-10-21_Agnes_Tshibangu
groupomania social network (React, express, Mysql, NodeJs)

Create a corporate social network
Setting up the development environment (IDE)
Set up of Node
Go to NodeJS.org to download and then install the latest version of Node.

Set up of Vue.js
To install it, run the following command from your console: npm install vue

Set up of MySQL
Here is the process to install MySQL: https://openclassrooms.com/fr/courses/6971126-implementez-vos-bases-de-donnees-relationnelles-avec-sql/7152681-installez-le-sgbd-mysql

Launching the app
Clone the project:

git clone https://github.com/jerome-dubois/JeromeDubois_7_14082021.git

Backend
MySQL
Configure backend/config/config.json and make sure the username and password match your local MySQL credentials.

Then, you can create database with:

cd backend

npm install

npx sequelize-cli db:create

And then, you can create tables defined in migration files with the following command:

npx sequelize-cli db:migrate

Launching
Open a new terminal with the following successive orders:

cd backend

npm install

node server

Frontend
Open a new terminal with the following successive orders:

cd frontend

npm install

npm run serve

Then open on: http://localhost:8080/#/register
