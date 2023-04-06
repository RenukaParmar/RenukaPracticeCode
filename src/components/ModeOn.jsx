import React, { useState } from 'react'
import './App.css';

const ModeOn = () => {
    const [mode, setMode] = useState(false)
    function handleChange() {
        setMode((prevMode) =>!prevMode)
    }
   
    return (
        <div>
            <div className='header container-fluid'>
    </div>
            <form >
                <div className='buttonMode' >
                    <label className="form-check-label me-1 mt-1"
                        htmlFor="flexSwitchCheckDefault">Light</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input form-check form-switch"
                             role="switch" id="flexSwitchCheckDefault"
                            type="checkbox"
                            onChange={handleChange}
                            defaultChecked={mode}
                            // onChange={setMode}
                             />
                    </div>
                    <label className="form-check-label ms-1 mt-1"
                        htmlFor="flexSwitchCheckDefault">Dark</label>
                </div>
            </form>
            <Main mode={mode}/>

        </div>
    )
}

export default ModeOn

function Main(props) {
    var styles={
         backgroundColor: props.mode ? "black" : "white" ,
         color:props.mode ? "white" : "black"
    }
    return (
        <>
            <div className='ModeOnOffPortion' style={styles}>
                <h1>Facts</h1>
                <ul>
                    <li>React is a library.</li>
                    <li>React is a library.</li>
                    <li>React is a library.</li>
                    <li>React is a library.</li>
                </ul>
            </div>
        </>
    )
}
