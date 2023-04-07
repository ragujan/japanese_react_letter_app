import React, { useMemo } from 'react'

function App() {
    const [number, setNumber] = useState(0);
    const [inc, setInc] = useState(0);

    const factorial = useMemo();

    const onChange = event =>{
        setNumber(Number(event.target.value));
    }

    const onClick = ()=> setInc(i => i+1);

    return (
        <div>
               Factorial of 
               <input type="text" value={number} onChange={onChange} />
                is {factorial}
                <button onClick={onclick}>click</button>
        </div>
    )
}

export default App
const factorialOf = (n) => {
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}