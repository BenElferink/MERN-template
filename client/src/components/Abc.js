import React from "react";

function Abc() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>start {year}</p>
    </footer>
  );
}

export default Abc;
