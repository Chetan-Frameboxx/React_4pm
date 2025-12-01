import React from "react";
import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <h2>I'm About</h2>
      <button className="btn btn-primary" onClick={goToHome}>
        Go To Home Page
      </button>
    </>
  );
}

export default About;
