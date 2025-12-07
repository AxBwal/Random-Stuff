import { useState, useRef, useEffect } from "react";

function usePrevious(value) {
  const prevRef = useRef();
  console.log("prevRef1", prevRef )

  useEffect(() => {
    prevRef.current = value;
  console.log("prevRef2", prevRef )
  console.log("prevRef3", prevRef.current )


  }, [value]);
  return prevRef.current;
}

export default function PreviousCounter() {
  const [currentState, setCurrentState] = useState(0);
  const previousState = usePrevious(currentState);

  function increment() {
    setCurrentState((c) => c + 1);
  }

  function decrement() {
    setCurrentState((c) => c - 1);
  }

  function reset() {
    setCurrentState(0);
  }

  return (
    <div>
      <div>This is the Previous Counter</div>
      <div>Current Count: {currentState}</div>
      <div>Previous Count: {previousState}</div>

      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
