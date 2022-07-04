import React,{useState} from 'react'

export default function TextForm(props) {
    const handleReset=()=>{
        let newText = '';
        setText(newText)
    }

    const handleCopy=()=>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
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
    <div className="container mx-2 my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" 
        value={text} style={{backgroundColor: props.mode==='dark'?'#10102b':'white',color: props.mode==='dark'?'white':'black'}}
        onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button onClick={handleReset} className="btn btn-dark mx-1 my-1">Clear Text</button>
        <button onClick={handleUpper} className="btn btn-dark mx-1 my-1" >Convert toUpper</button>
        <button onClick={handleLower} className="btn btn-dark mx-1 my-1">Convert toLower</button>
        <button onClick={handleCopy} className="btn btn-dark my-1 mx-1">Copy Text</button>
        <button onClick={handleExtraSpaces} className="btn btn-dark my-1 mx-1">Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Approx {0.008*text.split(" ").length} Minutes to read the Text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>
    </>
  )
}
