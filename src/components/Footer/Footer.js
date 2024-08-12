import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#c6c6c6",
        textAlign: "center",
        padding: "10px",
        marginTop: "auto",
        zIndex: 9
      }}
    >
      <p style={{ margin: 0, fontSize: "15px", fontWeight: "600" }}>
        &copy; The Coca-Cola Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
