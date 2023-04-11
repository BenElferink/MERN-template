import axios from "axios";

export const onNewScanResult = (decodedText, decodedResult, handleNewPreferenceData) => {
  console.log(decodedText);

  // Make GET request using axios
  axios
    .get(`http://localhost:8080/preferences/${decodedText}`) // Update the URL to include the correct hostname and port
    .then((response) => {
      // Handle successful response
      const preferenceData = response.data;
      // Call the handleNewPreferenceData function with the preference data
      handleNewPreferenceData(preferenceData);
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching preference:", error);
      // Add your custom logic for handling the error here
    });
};



// use of promises???
