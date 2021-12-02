import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>supported by material-ui</p>
    </footer>
  );
}

export default Footer;
