import React, { useState } from "react";

function CheckboxExample() {
  const [skills, setSkills] = useState([]);

  const handleCheckbox = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
    
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((item) => item !== value));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Skills</h2>

      <input type="checkbox" value="HTML" onChange={handleCheckbox} /> HTML
      <br />

      <input type="checkbox" value="CSS" onChange={handleCheckbox} /> CSS
      <br />

      <input type="checkbox" value="JavaScript" onChange={handleCheckbox} /> JavaScript
      <br />

      <h3>Selected Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxExample;