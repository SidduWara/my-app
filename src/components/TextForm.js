import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [previousText, setPreviousText] = useState('')
    const [isCleared, setIsCleared] = useState(false)
    // setText("heyeyeye");
    const handleUpClick = () => {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase!', 'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase!', 'success');
    }
    const handleAltClick = () => {
        const alternateCase = text
            .split("")
            .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
            .join("");
        setText(alternateCase);
        props.showAlert('Converted to Alternative!', 'success');
    };
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied the text!', 'success');
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed all extra spaces!', 'success');
    }
    const handleClrClick = () => {
        setPreviousText(text);
        setText('');
        setIsCleared(true);
        props.showAlert('Cleared all text!', 'success');
    }
    const handleUndoClick = () => {
        setText(previousText);
        setIsCleared(false);
        props.showAlert('Undo is done', 'success')
    };    

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    // let wordLength = text.split(" ").length;
    let wordLength = text.trim().split(/\s+/).filter(word => word !== "").length;

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onChange={handleOnChange} onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onChange={handleOnChange} onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-2" onChange={handleOnChange} onClick={handleAltClick}>Convert to AlTeRnAtIVe</button>
                <button className="btn btn-primary mx-2" onChange={handleOnChange} onClick={handleCopy}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2" onChange={handleOnChange} onClick={handleExtraSpace}>Remove Extra Space</button>
                <div className='my-2'>
                <button className="btn btn-primary mx-2" onChange={handleOnChange} onClick={handleClrClick}>Clear</button>
                {isCleared && (
                    <button className="btn btn-primary mx-2" onClick={handleUndoClick}>Undo</button>
                )}
                </div>

            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{wordLength} words and {text.length} characters</p>
                <p>{0.008 * wordLength} Minutes to read</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Enter your text in the textbox to preview here"}</p>
            </div>
        </>
    );
}


