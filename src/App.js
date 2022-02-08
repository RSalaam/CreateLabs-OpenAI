import React, { useState } from "react";
import "./App.css";
import Popup from "./Popup";
import "regenerator-runtime/runtime.js";
import submitForCompletion from "../functions/completion";

const App = () => {
  const [output, setOutput] = useState(null);
  const [inputText, setInputText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setOutput(await submitForCompletion(inputText));
    setInputText("");
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="instruction-input-submit">
      <h3>
        Type your text below, so that we can mimic you!
      </h3>
      <textarea
      className="input"
        type="text"
        value={inputText}
        placeholder='Type here, beginning with "Say..."'
        onChange={(event) => setInputText(event.target.value)}
      />
      <br />
      <button
      className="submit-button"
        onClick={async () => {
          await handleSubmit(event);
          await togglePopup();
        }}
      >
        Submit
      </button>
      {isPopupOpen && (
        <Popup
          content={<>{output ? <p>{output}</p> : null}</>}
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default App;
