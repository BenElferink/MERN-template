import mongoose from 'mongoose'; // MongoDB (database)
import express from 'express'; // Backend App (server)
import cors from 'cors'; // HTTP headers (enable requests)
import morgan from 'morgan'; // Logs incoming requests
import dotenv from 'dotenv'; // Secures variables

// import IMPORTED_ROUTES from './api/routes/route.js';
// ^ ^ ^ un-comment this to use imported route(s)
// doing this will link the following files:   server.js -> exampleRoutes.js -> exampleControllers.js -> Example.js

// initialize app
const app = express();

// middlewares
app.use(express.json({ limit: '10mb', extended: true })); // body parser
app.use(express.urlencoded({ limit: '10mb', extended: true })); // url parser
app.use(cors({ origin: 'http://localhost:3000' })); // enables http requests on react development server
app.use(morgan('common')); // logs requests
dotenv.config(); // protected variables

// configure db:
// if you want to connect to cloud server (atlas): edit "CONNECTION_URL" in -> .env file
// if you want to use local server (community): edit "DB_NAME"
const DB_NAME = 'exampleDB';
const CONNECTION_URL = process.env.CONNECTION_URL || `mongodb://localhost:27017/${DB_NAME}`;
const PORT = process.env.PORT || 8080; // 8080 === development port
const DEPRECATED_FIX = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }; // update this with (possible) deprecated warnings

// connect to db
mongoose
  .connect(CONNECTION_URL, DEPRECATED_FIX)
  .catch((error) => console.log('❌ MongoDB connection error', error)); // listen for errors on initial connection
mongoose.connection.on('connected', () => console.log('✅ MongoDB connected')); // connected
mongoose.connection.on('disconnected', () => console.log('❌ MongoDB disconnected')); // disconnected
mongoose.connection.on('error', (error) => console.log('❌ MongoDB connection error', error)); // listen for errors after the connection is established (errors during the session)

// routes
app.get('/', (request, response, next) => response.send('Hello World - Express.js'));

// app.use('/api/v1/example', IMPORTED_ROUTES);
// ^ ^ ^ un-comment this to use imported route(s)

// server is listening for requests
app.listen(PORT, () => console.log(`✅ Server is listening on port: ${PORT}`));
