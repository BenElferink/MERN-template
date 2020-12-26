import mongoose from 'mongoose';
import Example from './../models/model.js';

export const getExamples = (request, response, next) =>
  Example.find() // what is .find() ???   --->   https://mongoosejs.com/docs/queries.html
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(500).json(error));

export const uploadExample = (request, response, next) =>
  new Example({
    _id: mongoose.Types.ObjectId(), // _id is set by default, (you can remove this line)
    name: request.body.fieldName, // fieldName === name used on client side
  })
    .save() // what is .save() ???   --->   https://mongoosejs.com/docs/api.html#document_Document-save
    .then.then((data) => response.status(201).json(data))
    .catch((error) => response.status(500).json(error));

// more about response status codes   --->   https://restapitutorial.com/httpstatuscodes.html
