import React, { useState } from "react";
import "regenerator-runtime/runtime.js";
import submitForCompletion from "../functions/completion";

const App = () => {
  const [output, setOutput] = useState(null);
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setOutput(await submitForCompletion(inputText));
    setInputText("");
  };

  return (
    <div>
      <h4>Type your text below, so that the robot can repeat you!</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={inputText}
          placeholder='Type here, beginning with "Say..."'
          onChange={(event) => setInputText(event.target.value)}
        />
        <br />
        <button>Submit</button>
        <div>{output ? <p>{output}</p> : null}</div>
      </form>
    </div>
  );
};

export default App;
