import express from 'express';
import getExamples from './../controllers/controller.js'; // import request & response function
const router = express.Router(); // initialize router

/*
  1st param = extended path location
  2nd param = request & response function

  current link: http://localhost:8080/examples
*/
router.get('/examples', getExamples);

export default router;
