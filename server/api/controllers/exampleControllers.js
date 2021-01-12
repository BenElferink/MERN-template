import mongoose from 'mongoose';
import Example from '../models/Example.js';
// more about response status codes   --->   https://restapitutorial.com/httpstatuscodes.html

export async function getExamples(request, response, next) {
  try {
    const allExamples = await Example.find();
    response.status(200).json(allExamples);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
}

export const uploadExample = async (request, response, next) => {
  try {
    let newExample = new Example({
      _id: mongoose.Types.ObjectId(), // _id is set by default, (you can remove this line)
      name: request.body.fieldName, // fieldName === name used on client side
    });

    const savedExample = await newExample.save();
    response.status(201).json(savedExample);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
