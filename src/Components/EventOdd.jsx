import React, { useState } from 'react'

function EventOdd() {
    const[number,setNumber]=useState(0)
    const[message,setMessage]=useState("")

    function buttonchange(e){
        setNumber(e.target.value)
    }

    function eventoddChecker(){
        if(number % 2 ==0){
            setMessage("This Number is EVEN")
        }
        else{
             setMessage("This Number is ODD")
        }
    }
  return (
    <div>
        <div>This is the Evenet Code</div>

        <input value={number} onChange={buttonchange} type="number" placeholder='Enter the number' />

        <button onClick={eventoddChecker}>Check</button>

        <div>{message}</div>


    </div>
  )
}

export default EventOdd