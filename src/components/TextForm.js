import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const handleExtraClick = () => {
    let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
  }
  
  
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
        Copy text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraClick}>
        Handle extra spaces
      </button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split (" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split (" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
