import { useState } from "react"

function GuessLower() {
    let guessNumber = 50
    const [currentNumber, setCurrentNumber] = useState(0)
      const [message, setMessage] = useState("");

    function currentNumberEntered(e) {
        setCurrentNumber(e.target.value)

    }

    function buttonchecker() {
        let nums = currentNumber;
        if (nums > guessNumber) {
             setMessage("The Number is Bigger");
        }
        else if (nums < guessNumber) {
           setMessage("The Number is Smaller");
        }
        else {
           setMessage("You Got The Number");
        }


    }
    return <div>

        <div>The Game is Guess Lower or Higher</div>

        <input onChange={(e) => currentNumberEntered(e)} type="number" name="" id="" placeholder="Enter the number" />

        <div style={{ display: "flex", gap: "20px" }}>
            <button onClick={buttonchecker}>Check Guess</button>
            <button onClick={() => setCurrentNumber(0)}>reset game</button>
        </div>


        <div>

        </div>

          <div>{message}</div>

    </div>
}

export default GuessLower