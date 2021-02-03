import mongoose from 'mongoose'; // MongoDB (database)
import express from 'express'; // Backend App (server)
import dotenv from 'dotenv'; // Secures variables
import cors from 'cors'; // HTTP headers (enable requests)
import morgan from 'morgan'; // Logs incoming requests
// import routes from './api/routes/routes.js';
// ^ ^ ^ un-comment this to use imported route(s)
// doing this will link the following files:   index.js -> routes.js -> controllers.js -> User.js

// initialize app
const app = express();
const origin = '*'; // allow source of requests (* --> everywhere)

// middlewares
dotenv.config();
app.use(cors({ origin }));
app.use(express.json({ limit: '1mb', extended: false })); // body parser
app.use(express.urlencoded({ limit: '1mb', extended: false })); // url parser
app.use(morgan('common'));

// configure db:
// for "atlas" edit CONNECTION_URL in -> .env file || for "community server" edit <dbname>
const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb://localhost:27017/<dbname>';
const DEPRECATED_FIX = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };

// connect to db
mongoose
  .connect(CONNECTION_URL, DEPRECATED_FIX)
  .catch((error) => console.log('❌ MongoDB connection error', error)); // listen for errors on initial connection

const db = mongoose.connection;
db.on('connected', () => console.log('✅ MongoDB connected')); // connected
db.on('disconnected', () => console.log('❌ MongoDB disconnected')); // disconnected
db.on('error', (error) => console.log('❌ MongoDB connection error', error)); // listen for errors during the session

// routes
app.get('/', (request, response, next) => response.status(200).json('<h1>Hello World!</h1>'));
// app.use('/api/v1/users', routes);
// ^ ^ ^ un-comment this to use imported route(s)

// server is listening for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server is listening on port: ${PORT}`));
