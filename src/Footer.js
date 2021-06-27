import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer text-center my-2">
      <p>
        <a
          href="https://github.com/Helena-161/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/helena-stalbovska-b51435181/"
          target="_blank"
          rel="noreferrer"
        >
          Helena Stalbovska
        </a>
      </p>
    </footer>
  );
}
