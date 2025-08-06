import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="err-container">
      <h1>Let's Connect and Revolutionize E-commerce</h1>
      <h2>
        Reach out to Project Admin at{" "}
        <Link
          to="#"
          target="_blank">LinkedIn
        </Link>{" "}
        and{" "}
        <Link to="mailto:Aditya.channe.iot@ghrce.raisoni.net" target="_blank">
          Aditya.channe.iot@ghrce.raisoni.net
        </Link>
      </h2>
    </div>
  );
};

export default Contact;
