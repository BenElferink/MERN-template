import mongoose from 'mongoose';

const instance = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId, // _id is set by default, (you can remove this line)
    name: String,
    /*
      name = property of document object
      String = type of value   --->   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
    */
  },
  {
    timestamps: true,
  },
);

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'Person' === collection: 'people'
const modelName = 'Example';

export default mongoose.model(modelName, instance);
