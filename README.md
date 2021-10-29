# P7_01-10-21_Agnes_Tshibangu
--- groupomania social network (React, express, Mysql, NodeJs) ---

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

# Set up MySQL 

1) install MySQL (I'm using Wamp/localhost - phpMyAdmin) 
2) configure backend/config/config.json and make sure the username and password match your local MySQL credentials.
3) create the database with sequelize ``` npx sequelize-cli db:create ```

# Clone the project 

1) open git bash 
2) create or enter the directory where you want the cloned directory to be added 
3) use the following command  : ``` git clone https://github.com/agnestshibangu/P7_01-10-21_Agnes_Tshibangu.git ```


# Run the App

1) cd backend ``` nodemon server ``` 
2) cd frontend ``` npm start ```


Then open on: http://localhost:3000/login
