import React,{useState} from 'react'

export default function TextForm(props) {
    const handleReset=()=>{
        let newText = '';
        setText(newText)
    }

    const handleUpper=()=>{
        // console.log("Uppercase btn was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLower=()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        // console.log('onChange');
        setText(event.target.value)
    }

    const[text , setText] = useState('Enter the Text here');

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" 
        value={text} 
        onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button onClick={handleReset} className="btn btn-dark mx-1">Clear Text</button>
        <button onClick={handleUpper} className="btn btn-dark mx-1" >Convert toUpper</button>
        <button onClick={handleLower} className="btn btn-dark mx-1">Convert toLower</button>
    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Approx {0.008*text.split(" ").length} Minutes to read the Text</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
