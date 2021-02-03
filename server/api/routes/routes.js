import express from 'express';
import { getAllUsers, createNewUser } from '../controllers/controllers.js'; // import request & response function

// initialize router
const router = express.Router();

/*
  request methods   --->   https://www.tutorialspoint.com/http/http_methods.htm
  1st param = extended url path
  2nd param = middlewares (optional)
  3rd param = request & response function (controller)
*/

// current method: GET
// current path: http://localhost:8080/api/v1/users
router.get('/', (request, response, next) => next(), getAllUsers);

// current method: POST
// current path: http://localhost:8080/api/v1/users/new
router.post('/new', (request, response, next) => next(), createNewUser);

export default router;
