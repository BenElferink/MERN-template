import React, {useState} from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import { onNewScanResult } from './ScanResultHandler.js';
import ParentComponent from "./ParentComponent";


const Cashier = () => {   //removed props
  const handleNewPreferenceData = (data) => {
    // Call appropriate function in ParentComponent to update state
    // e.g., setPreferenceData(data);
    console.log("Preference Data:", data);
    setPreferenceData(data);
  };
  // State to store preferenceData
  const [preferenceData, setPreferenceData] = useState(null);

  return (
    <div className="App">
      <Header />
      <div id="cam">
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={(decodedText, decodedResult) => onNewScanResult(decodedText, decodedResult, handleNewPreferenceData)} // Pass the function as a callback
        />
      </div>
      <div className="myform">
        <ParentComponent preferenceData={preferenceData}/>
        {/* calling this function here its props should be updated here only */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cashier;
