import React, { useState, useEffect } from "react";
import io from "socket.io-client"; // Import the socket.io-client library

const Chef = () => {
  const [preferenceData, setPreferenceData] = useState(null); // State to store the preference data

  useEffect(() => {

    const socket = io("http://localhost:8080");
        
    // Event listener for receiving updated preference data from the server
    socket.on("preferenceUpdated", (updatedPreference) => {
      setPreferenceData(updatedPreference);
    });

    return () => {
      socket.off("preferenceUpdated");
    };
  }, []);

  // Render the preference data in the component
  return (
    <div>
      <h1>Chef Component</h1>
      {preferenceData ? (
        <div>
          <p>Name: {preferenceData.name}</p>
          <p>Phone: {preferenceData.phone}</p>
          <p>Tips: {preferenceData.tips}</p>
          <p>Table No: {preferenceData.tableNo}</p>
          <p>Token No: {preferenceData.tokenNo}</p>
          <ul>
            {preferenceData.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No preference data available.</p>
      )}
    </div>
  );
};

export default Chef;
