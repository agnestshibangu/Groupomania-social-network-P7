# P7_01-10-21_Agnes_Tshibangu
--- groupomania social network (React, express, Mysql, NodeJs) ---

link to github repo: https://github.com/agnestshibangu/P7_01-10-21_Agnes_Tshibangu

The goal for this project was to create a social network for the company Groupomania to improve communication among its employees. 
Using Express and NodeJs for the backend and React for the frontend, this API has a login and authentication system (JWT), displays the lastest activities and allows users to share their ideas thank to a forum where photos, posts and comments can be exchanged.

# How to install NodeJs

download and install the last version of Node.Js (you can add nodemon)

# How to install React

1) open terminal
2) Create a new project folder with ``` mkdir Groupomania ```
3) then enter the directory ``` cd Groupomania ```
4) install react with the following command : ``` npx create-react-app <name> ``` and than ``` cd <name> ``` 
5) then run the Node server with the following command :  ``` npm start  ``` 
6) use  ``` ctrl + c  ```  if you want to stop the React app in your command line

# Clone the project 

1) create or enter the directory where you want the cloned directory to be added 
2) open git bash and clone this repo by typing the following command line ``` git clone https://github.com/agnestshibangu/P7_01-10-21_Agnes_Tshibangu.git ```
3) remove the yarn lock and/or package json lock files if needed
4) remove the npm modules if needed 
5) install npm by typing ``` npm install ```
6) install MySQL  (I'm using Wamp/localhost - phpMyAdmin) 
7) install nodemon server
8) configure backend/config/config.json and make sure the username and password match your local MySQL credentials.
9) create the database with sequelize ``` npx sequelize-cli db:create ```


# Run the App

In two separated terminals, run the following command lines : 
1) cd backend ``` nodemon server ``` 
2) cd frontend ``` npm start ```


Then open on: http://localhost:3000/login
