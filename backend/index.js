const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const mysql = require('mysql2')
const postCtrl = require('./controllers/post')
const userCtrl = require('./controllers/user')
const multer = require('./middleware/multer-config')
const path = require('path');
const helmet = require('helmet')


/// CORS policy ///

//correct Cross Origin erros
const cors = require('cors')
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", 'PUT', "DELETE", "PATCH", "OPTIONS"],
  })
)

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });

// built-in middleware function in Express. it parses incoming requests with JSON payloads and is based on body-parser
// payload = les données qu'on veut encoder
app.use(express.json())
app.use(express.urlencoded({
  extended: true}));

app.use(helmet());

/// Routes ////

const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const postforumRoutes = require('./routes/postforum')

app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)
app.use('/api/postforum', postforumRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')));



//////////////



app.listen(3001, () => {
    console.log('running on port 3001');
})