import React from 'react';
import HelloWorld from './components/HelloWorld';
import './style/style.css';
// import * as api from './api';
// un-comment this ^ ^ ^ to import api endpoints

function App() {
  // React.useEffect(() => {
  //   api
  //     .getSomething() // replace this with your endpoint
  //     .then((response) => console.log(`✅ ${response.status} ${response.statusText}`, response.data))
  //     .catch((error) => console.log(`❌ ${error}`));
  // });
  //
  // example ^ ^ ^ using the api endpoint

  return (
    <div className='App'>
      <HelloWorld />
    </div>
  );
}

export default App;
