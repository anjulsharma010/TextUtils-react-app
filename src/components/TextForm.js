import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text is clear", "danger")
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "primary")
  }
  
  const handleExtraClick = () => {
    let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Extra spaces removed", "primary")
  }
  
  
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode=== 'dark'? 'white': 'black'}}>
      <h1 className='mb-4'>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode=== 'dark'? '#13466e': 'white', color: props.mode=== 'dark'? 'white': 'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
        Convert to lowercase
      </button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
        Clear text
      </button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
        Copy text
      </button>
      <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleExtraClick}>
        Handle extra spaces
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'? 'white': 'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split (" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
