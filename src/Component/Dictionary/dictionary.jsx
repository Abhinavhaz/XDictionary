
import React, { useState, useEffect } from "react";

function Dictionary() {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const data = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let found = false;
    data.forEach((item) => {
      if (item.word.toLowerCase() === input.toLowerCase()) {
        setSuggestion(item.meaning);
        found = true;
      }
    });
    if (!found) {
      setSuggestion("Word not found in the dictionary.");
    }
  };

  
    


  return (
    <div>
      <h1>Dictionary App</h1>
     
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Search for a word..."
        />
        <button type="submit" onClick={handleSubmit}>Search</button>
    
      <div>
        <h5>Definition:</h5>
        {suggestion && <p>{suggestion}</p>}
      </div>
    </div>
  );
}

export default Dictionary;
 