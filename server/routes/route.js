import express from 'express';
import { getExamples, uploadExample } from './../controllers/controller.js'; // import request & response function

const router = express.Router(); // initialize router

/*
  1st param = extended path location
  2nd param = request & response function
*/
router.get('/', getExamples); // current path: http://localhost:8080/example
router.post('/upload', uploadExample); // current path: http://localhost:8080/example/upload

export default router;
