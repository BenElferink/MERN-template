import React from 'react';
import HelloWorld from './components/HelloWorld/HelloWorld';
// import * as api from './api';
// ^ ^ ^ un-comment this to import api endpoints

function App() {
  // const [data, setData] = React.useState([]);
  // React.useEffect(() => {
  //   api
  //     .getSomething() // replace this with your endpoint
  //     .then((response) => console.log(`✅ ${response.status} ${response.statusText}`, setData(response.data)))
  //     .catch((error) => console.log(`❌ ${error}`));
  // }, []);
  //
  // ^ ^ ^ example using the api endpoint

  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
