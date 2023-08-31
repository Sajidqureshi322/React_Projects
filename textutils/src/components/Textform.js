import React, { useState } from "react";

export default function Textform(props) {
    const [text,setText] = useState("");
    const handleUpClick = (event) =>{
        if(text === ""){
            props.showAlert("Please Enter text before converting","danger");
        }
        else{
            setText(text.toUpperCase());
            props.showAlert("converted to Uppercase","success");
        }
    }
    const handleLoClick = (event) =>{
        if(text === ""){
            props.showAlert("Please Enter text before converting","danger");
        }
        else{
            setText(text.toLowerCase());
            props.showAlert("converted to Lowercase","success");
        }
    }
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Clear text","success");
    }
    const handleCopyClick = () =>{
        if(text === ""){
            props.showAlert("Please Enter text before converting","danger");
        }
        else{
            navigator.clipboard.writeText(text);
            props.showAlert("Text has been copied to the clipboard","success");
        }
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
  return (
    <>
    <div className="conatiner" style={{color:props.mode === 'light'?'#042743 ':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value = {text} style={{backgroundColor:props.mode === 'light'?'white':'#13466e',
        color:props.mode === 'light'?'#042743':'white'}}
         onChange={handleOnChange}>{text}</textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>copy</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra space</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'light'?'#042743':'white'}}>
        <h2>Your text summary</h2>  
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:"Enter something in the above text to preview it here"} </p>
    </div>
    </>
  );
}
