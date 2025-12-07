import React, { useEffect, useRef, useState } from 'react'

function Debounce() {
    const [query, setQuery] = useState("");
    const timeoutId=useRef(null)

    useEffect(() => {
         if (!query) return; 
        timeoutId.current  = setTimeout(() => {
            console.log("Api is Calling")
        }, 500)
        return () => clearTimeout(timeoutId.current)
    }, [query])


    function handleChange(e) {
        setQuery(e.target.value);
    }
    return (
        <div>
            <div>Search with Debounce</div>

            <input value={query} onChange={handleChange} type="text" placeholder='Please type here' />

            <div>Searching for: {query}</div>

        </div>
    )
}

export default Debounce