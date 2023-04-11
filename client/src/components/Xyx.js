import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>end {year}</p>
    </footer>
  );
}

export default Footer;
