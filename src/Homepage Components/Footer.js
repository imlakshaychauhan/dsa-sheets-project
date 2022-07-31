import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          position: "relative",
          height: "50px",
          bottom: 0,
          width: "100%",
        }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <a
          className="text-dark"
          href="https://github.com/imlakshaychauhan/dsa-sheets-project/"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
export default Footer;
