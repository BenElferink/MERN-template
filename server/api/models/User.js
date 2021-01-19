import mongoose from 'mongoose';

const instance = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId, // _id is set by default, (you can remove this line)

    /*
      name = Object key
      String = Type
    */
    name: String,
  },
  {
    timestamps: true,
    // this creates and maintains:
    // {
    //   createdAt: Date,
    //   updatedAt: Date,
    // }
  },
);

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'User' === collection: 'users'
const modelName = 'User';

export default mongoose.model(modelName, instance);
