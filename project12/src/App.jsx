import React, { useState } from "react";

function App() {
  // Step 2: Define state
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };

  // Clear input
  const clearInput = () => {
    setInputValue(""); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Get Input Field Value</h2>
      {/*Step1*/}
      <input
        type="text"
        value={inputValue} 
        onChange={handleChange}
        placeholder="Enter something"
      />
      {/*Step4*/}
      <button onClick={clearInput} style={{ marginLeft: "10px" }}>
        Clear
      </button>
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default App;