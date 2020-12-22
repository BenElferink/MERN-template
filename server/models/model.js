import mongoose from 'mongoose';

const instance = new mongoose.Schema({
  /*
    name = property of document object
    String = type of value   --->   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
  */
  name: String,
});

// document = model name   --->   https://mongoosejs.com/docs/guide.html
const document = 'example';

export default mongoose.model(document, instance);
