import Example from './../models/model.js';

const getExamples = (request, response) => {
  // what is .find() ???   --->   https://mongoosejs.com/docs/queries.html
  Example.find((error, allExamples) => {
    if (error) {
      console.log(`❌ ${error}`);
      return response.status(404).json(error); // 404 not found + catched error -> send to client
    }

    // more about response status codes   --->   https://restapitutorial.com/httpstatuscodes.html

    console.log('✅ -FOUND- :', allExamples);
    return response.status(200).json(allExamples); // 200 ok + array of couments -> send to client
  });
};

export default getExamples;
