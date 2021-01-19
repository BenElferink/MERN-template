import mongoose from 'mongoose';
import User from '../models/User.js';
// more about response status codes   --->   https://restapitutorial.com/httpstatuscodes.html

export async function getAllUsers(request, response, next) {
  try {
    const allUsers = await User.find(); // finds all in 'users' collection

    response.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
}

export const createNewUser = async (request, response, next) => {
  try {
    let newUser = new User({
      _id: mongoose.Types.ObjectId(), // _id is set by default, (you can remove this line)
      name: request.body.userName, // userName === name used on client side
    });
    const savedUser = await newUser.save();

    response.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};
