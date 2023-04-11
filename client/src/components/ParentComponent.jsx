import React from "react";
import MyForm from "./MyForm";

const ParentComponent = ({preferenceData}) => {
  return (
    <div>
      {console.log("triggered parentcomponent successfully")}
      {/* Render MyForm and pass preferenceData as prop */}
      {preferenceData && <MyForm preferenceData={preferenceData}  />}

    </div>
  );
};

export default ParentComponent;
 


