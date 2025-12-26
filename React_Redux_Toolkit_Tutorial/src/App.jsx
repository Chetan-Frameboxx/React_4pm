import React from "react";
import Counter from "./component/Counter";
import Navbar from "./component/Navbar";
import Card from "./component/Card";

function App() {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <div className="border border-danger border-5 py-2 text-center m-4">
          <h1>Hey Folks, We Are Learing Redux-Toolkit In Today's Session.</h1>
          <h2>Are You Guys Ready To Join me In This Wonderful Session?</h2>
        </div>
        <Counter />
        <Card/>
      </div>
    </>
  );
}

export default App;
