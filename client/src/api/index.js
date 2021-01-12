import axios from 'axios';

// api base-url (that you created on server side)
const url = 'http://localhost:8080/api/v1';

// current method: GET
// current path: http://localhost:8080/api/v1/example
export const getExample = () => axios.get(`${url}/example`);

// current method: POST
// current path: http://localhost:8080/api/v1/example/upload
export const uploadExample = (form) => axios.post(`${url}/example/upload`, form);

// Example using your API:
//
//
//
// 1) in your Component file, import a method from above like so:
//
//    import { getExample } from './api';
//
//
//
// 2) Then call the method and handle it's errors/response, like so:
//
//    function ExampleFetching() {
//      const [data, setData] = React.useState([]);
//
//      React.useEffect(() => {
//        getExample()
//          .then((response) => setData(response.data))
//          .catch((error) => console.log(error));
//      }, []);
//
//      return (
//        <div>
//          {data}
//        </div>
//      );
//    }
