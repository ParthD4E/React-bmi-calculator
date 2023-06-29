import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  //state Section
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  // reload
  let reload = () => {
    window.location.reload();
  };
  //Logic Calculation
  let calbmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter a valid Age");
    } else {
      let height1 = height / 100;
      console.log(height1);
      let bmica = weight / (height1 * height1);
      setBmi(bmica.toFixed(1));

      if (bmica < 18.5) {
        setMessage("You are under Wright");
      } else if (bmica >= 18.5 && bmica < 24.9) {
        setMessage("you are within a healthy weight range");
      } else if (bmica >= 24.9 && bmica < 29.9) {
        setMessage(" you are considered overweight ove");
      } else {
        setMessage(" you are considered obese");
      }
    }
  };

  return (
<div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calbmi}>
          <div>
            <label>Weight (Kgs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (Cem)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p className="highlight">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
