import React from 'react'
import React, { useMemo, useRef } from 'react'
import { useState, useEffect } from "react";
function App() {
    const timerRef = useRef(null);
    const sendMessage = (e) => {
        e.preventDefault();
        timerRef.current = setTimeout(() => alert('Hey ??'), 1000);
    }

    useEffect(() => {
        // Clear the interval when the component unmounts
        return () => clearTimeout(timerRef.current);
    }, []);
    return (
        <div>
            <button onClick={sendMessage()}>Do</button>
        </div>
    )
}

export default App
