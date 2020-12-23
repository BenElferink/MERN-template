import Example from './../models/model.js';

const getExamples = (request, response) => {
  // what is .find() ???   --->   https://mongoosejs.com/docs/queries.html
  Example.find((error, data) => {
    if (error) {
      console.log(`❌ ${error}`);
      return response.status(404).json(error); // 404 not found + catched error -> send to client
    } else {
      console.log('✅ -FOUND- :', data);
      return response.status(200).json(data); // 200 ok + array of documents -> send to client
    }
    // more about response status codes   --->   https://restapitutorial.com/httpstatuscodes.html
  });
};

export default getExamples;
