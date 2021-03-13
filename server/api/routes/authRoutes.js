import express from 'express';
import { registerAccount, loginAccount, getAccount } from '../controllers/authControllers.js';

// initialize router
const router = express.Router();

// example: empty middleware
const middleware = (request, response, next) => next();

/*
  request methods   --->   https://www.tutorialspoint.com/http/http_methods.htm
  1st param = extended url path
  2nd param = middlewares (optional)
  3rd param = request & response function (controller)
*/

// POST at route: http://localhost:8080/auth/register
router.post('/register', middleware, registerAccount);
// POST at path: http://localhost:8080/auth/login
router.post('/login', middleware, loginAccount);
// GET at path: http://localhost:8080/auth/account
router.get('/account', middleware, getAccount);

export default router;
