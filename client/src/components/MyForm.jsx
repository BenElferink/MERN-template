import React, { useState, useEffect } from "react";
import axios from "axios";

const MyForm = ({ preferenceData }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tableNo, setTableNo] = useState("");
  const [tokenNo, setTokenNo] = useState("");
  const [tips, setTips] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (preferenceData) {
      // Set default values from preferenceData
      setName(preferenceData.name || "");
      setPhone(preferenceData.phone || "");
      setTips(preferenceData.tips?.join(", ") || ""); // Join tips array to form a string
      if (preferenceData.items) {
        setItems(preferenceData.items);
      }
    }
  }, [preferenceData]);

  //--------------------------------------------------------------------------------
  // Handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  
  // Create a new object with the updated form data
  const updatedPreference = {
    name: name,
    phone: phone,
    tips: tips,
    tableNo: tableNo,
    tokenNo: tokenNo,
    items: items
  };

  // Send a post request to the server to update the preference
  axios
    .post(`http://localhost:8080/preferences/${phone}`, updatedPreference)
    .then((response) => {
      // Handle successful response
      // You can perform any additional logic or UI updates here

      console.log("Preference updated successfully:", response.data);
      
  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("tips").value = "";
  document.getElementById("tableNo").value = "";
  document.getElementById("tokenNo").value = "";
  document.getElementById("items").value = "";
    })
    .catch((error) => {
      // Handle error
      // You can display an error message or perform any other error handling here
      console.error("Error updating preference:", error);
    });
};

  //--------------------------------------------------------------------------------
 

  // Handle change in tips input
const handleTipsChange = (e) => {
  const value = e.target.value.split(",").map((tip) => tip.trim());
  setTips(value);
};

  // Handle change in items input
  const handleItemsChange = (e) => {
    const value = e.target.value.split(",").map((item) => item.trim());
    setItems(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tips">Tips:</label>
      <input
           type="text"
           id="tips"
           name="tips"
          value={tips}
           onChange={handleTipsChange}
        />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="tableNo">Table No:</label>
      <input
        type="text"
        id="tableNo"
        name="tableNo"
        value={tableNo}
        onChange={(e) => setTableNo(e.target.value)}
      />
      <label htmlFor="tokenNo">Token No:</label>
      <input
        type="text"
        id="tokenNo"
        name="tokenNo"
        value={tokenNo}
        onChange={(e) => setTokenNo(e.target.value)}
      />
      <label htmlFor="items">Items:</label>
      <input
        type="text"
        id="items"
        name="items"
        value={items.join(", ")}
        onChange={handleItemsChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;





