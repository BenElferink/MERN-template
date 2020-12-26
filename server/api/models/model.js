import mongoose from 'mongoose';

const instance = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // _id is set by default, (you can remove this line)
  /*
    name = property of document object
    String = type of value   --->   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
  */
  name: String,
});

// document = model name   --->   https://mongoosejs.com/docs/guide.html
// note: use a singular name, mongoose automatically creates a collection like so -> model: 'Person' === collection: 'people'
const document = 'Example';

export default mongoose.model(document, instance);
