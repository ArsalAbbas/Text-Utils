// import PropTypes from 'prop-types';
import { useState } from 'react';



export default function TextForm(props){
    

    const handleChange=(event)=>{
        // console.log("Value was tried to be changed");
        setText(event.target.value);
        }
     const handleUpClick=()=>{
            // console.log("Button was clicked");
            let newText=text.toUpperCase();
            setText(newText);
        }
        const handleDownClick=()=>{
            // console.log("Button was clicked");
            let newText=text.toLowerCase();
            setText(newText);
        }
        const handleCopy=()=>{
            // console.log("Button was clicked");
            let copyText = text;
            navigator.clipboard.writeText(copyText);
            alert("Copied the text: " + copyText);
        }

const [text, setText] = useState('');

    return(
<>

 <div className={`container text-${props.current}`}>
     

<h2 className='my-3'>Text Analyser</h2>
<div className="form-group">
    <textarea className={`form-control bg-${props.current==='dark'?'light':'dark'} text-${props.current}`} onChange={handleChange} value={text}  id="exampleFormControlTextarea1" rows="8"></textarea>
     <button type="button" onClick={handleUpClick} className={`btn btn-${props.current==='dark'?'primary':'light'} my-3`}>Change to UPPERCASE</button>
     <button type="button" onClick={handleDownClick} className={`btn btn-${props.current==='dark'?'primary':'light'} my-3 mx-2`}>Change to lowercase</button>
     <button type="button" onClick={handleCopy} className={`btn btn-outline-${props.current==='dark'?'primary':'light'} my-3 mx-2`}>Copy<i className='fa fa-copy mx-2'></i> </button>

  </div>
     <h2>Entry stats</h2>
     <p>Total characters: {text.length} &emsp; Total words:{text.length>0?text.split(" ").length:0}</p>
      <p>Reading time: {(text.length>0?text.split(" ").length:0)*0.2} seconds</p>
      <h2>Preview:</h2> 
      <p>{text} </p> 

 </div>
    </>
    );
}
// TextForm.propTypes={
//   title: PropTypes.string
// };
// TextForm.defaultProps={
//   title: 'Anything'

// };