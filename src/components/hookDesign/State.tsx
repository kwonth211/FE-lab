import React from 'react';
import { useState } from "react"

let counterA = 0

export const StateExternalScope = () =>{

    console.log("Called StateExternalScope >>>" , counterA)
    const [number, setNumber] = useState(counterA++)

    const handleButtonClicked = () =>{
        setNumber(()=>number+1)
    }

    return (<div>
    {number} <button style={{marginLeft:'10px'}} onClick={handleButtonClicked}>+1</button>
    </div>)
}

let counterB = 0

export const StateCallback = () =>{

    console.log("Called StateCallback >>>" , counterB)
    const [number, setNumber] = useState<number>(() => counterB++)

    const handleButtonClicked = () =>{
        setNumber(()=> number+1)
    }

    return (<div>
    {number} <button style={{marginLeft:'10px'}} onClick={handleButtonClicked}>+1</button>
    </div>)
}