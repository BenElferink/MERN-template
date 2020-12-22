import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import IMPORTED_ROUTES from './routes/route.js';
// un-comment this ^ ^ ^ to use imported route(s)
// doing this will link the following files:   index.js -> route.js -> controller.js -> model.js

// initialize app
const app = express();
dotenv.config();

// middlewares
app.use(express.json()); // body parser
app.use(cors()); // enables http requests

// configure db --->            if you want to connect to cloud server: edit "CONNECTION_URL" in -> .env file
const DB_NAME = 'exampleDB'; // if you want to use local server: edit this "DB_NAME" (and remove the "CONNECTION_URL" from -> .env file)
const CONNECTION_URL = process.env.CONNECTION_URL || `mongodb://localhost:27017/${DB_NAME}`;
const PORT = process.env.PORT || 8080; // 8080 === development port
const DEPRECATED_FIX = { useNewUrlParser: true, useUnifiedTopology: true }; // change this with (possible) warnings on first connection

// connect to db
// mongoose connections   --->   https://mongoosejs.com/docs/connections.html
mongoose
  .connect(CONNECTION_URL, DEPRECATED_FIX)
  .then(() => console.log('✅ Mongoose (MongoDB) connected'))
  .then(() => app.listen(PORT, () => console.log(`✅ Server listening on port: ${PORT}`)))
  .catch((error) => console.log(`❌ MongoDB: ${error}`));

mongoose.connection.on('error', (error) => console.log(`❌ MongoDB: ${error}`));

// routes
app.get('/', (req, res) => res.send('Hello World - Express.js'));
// app.use('/', IMPORTED_ROUTES);
// un-comment this ^ ^ ^ to use imported route(s)
