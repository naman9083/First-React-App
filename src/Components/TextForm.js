import React,{useState} from 'react'  
export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        props.showAlert("Converted to Uppercase! ","success");
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked");
        let newText = text.toLowerCase();
        props.showAlert("Converted to Lowercase! ","success");
        setText(newText);
    }
    // const removeExtraSpace = (text)=>{
    //     const newText = text.replace(/\s+/g, ' ').trim();
    //     setText(newText);
    // }
    const handleOnChange = (event)=>{
        // console.log("UpperCase was clicked");
        setText(event.target.value);
    }
    const clearText = ()=>{
        // console.log("UpperCase was clicked");
        props.showAlert("Text Cleared! ","success");
        setText('');
    }
    // const logic=(text)=>{
    //    let numb = (text.charAt(text.length-1))===' '|| (text.length===0)?text.split(" ").length-1:text.split(" ").length;
    //    return numb;
    // }
    const[text,setText] = useState('');
    // const[myStyle,setMyStyle]=useState({
    //                 background: '',
    //                 color:'black',
    //                 backgroundClip: '',
    // })
    // const[btnText,setBtnText] = useState("Enable Rainbow text")
    // const toggleStyle = ()=>{
    //     if(myStyle.color ==='black'){
    //         setMyStyle({
    //             caretColor:'black',
    //             color:'transparent',
    //             background: 'linear-gradient(to bottom, red, orange , yellow, green, cyan, blue, violet)',
    //             backgroundClip:'text'
    //         })
    //         setBtnText("Disable Rainbow text")
    //     }
    //     else{
    //         setMyStyle({
    //             background: '',
    //             color:'black',
    //             backgroundClip: ''
    //         })
    //         setBtnText("Enable Rainbow text")
    //     }
    // }
    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.title}</h1>
            <div className="mb-3">
            <textarea style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'black'}} className="form-control" placeholder='Enter Text Here' value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" style={{backgroundColor:props.mode === 'dark'?'#0d6efd':'black'}} onClick={handleUpClick}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" style={{backgroundColor:props.mode === 'dark'?'#0d6efd':'black'}} onClick={handleLoClick}>Convert to Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" style={{backgroundColor:props.mode === 'dark'?'#0d6efd':'black'}} onClick={clearText}>Clear Text</button>
            {/* <button className="btn btn-primary mx-2"  onClick={toggleStyle}>{btnText}</button> */}
        </div>
        <div className="container my-4" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
  )
}
