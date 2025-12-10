import { MongoClient } from 'mongodb';
import Connection from './database/db.js';
import Routes from './routes/route.js'
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';


//This line intializes an instance of express application
const app = express();
 

//middlewares
dotenv.config();
app.use(fileUpload());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//defining use of routes
app.use('/', Routes);

//defining static polder
app.use(express.static('public'));

//----connecting db by using credentials in .env 
//const url = 'mongodb://localhost:27017/jarogi_db';
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});