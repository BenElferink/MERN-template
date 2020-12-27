import mongoose from 'mongoose';
import Example from './../models/model.js';
// more about response status codes   --->   https://restapitutorial.com/httpstatuscodes.html

export const getExamples = async (request, response, next) => {
  try {
    const allExamples = await Example.find(); // what is .find() ???   --->   https://mongoosejs.com/docs/queries.html
    response.status(200).json(allExamples);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const uploadExample = async (request, response, next) => {
  let newExample = new Example({
    _id: mongoose.Types.ObjectId(), // _id is set by default, (you can remove this line)
    name: request.body.fieldName, // fieldName === name used on client side
  });

  try {
    const savedExample = await newExample.save(); // what is .save() ???   --->   https://mongoosejs.com/docs/api.html#document_Document-save
    response.status(201).json(savedExample);
  } catch (error) {
    response.status(500).json(error);
  }
};
