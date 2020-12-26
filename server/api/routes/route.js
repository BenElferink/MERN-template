import express from 'express';
import { getExamples, uploadExample } from './../controllers/controller.js'; // import request & response function

// initialize router
const router = express.Router();

/*
  request methods   --->   https://www.tutorialspoint.com/http/http_methods.htm
  1st param = extended url path
  2nd param = middlewares (optional)
  3rd param = request & response function (controller)
*/
router.get('/', (request, response, next) => next(), getExamples); // current path: http://localhost:8080/api/v1/example
router.post('/upload', (request, response, next) => next(), uploadExample); // current path: http://localhost:8080/api/v1/example/upload

export default router;
