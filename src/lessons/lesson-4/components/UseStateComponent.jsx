import { useState } from "react";

const UseStateComponent = () => {

    const [count, setCount] = useState(0);

    function Increase() {
        setCount(count + 1);
    }

    /*
        function Increase() {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }
    */
    return (
        <>
            <div>{count}</div>
            {/* Normal kullanım */}
            <button onClick={Increase}>Increase</button>
            {/* Arrow function ile kullanım */}
            <button onClick={() => setCount(count - 1)}>Decrease</button>

        </>
    )
}

export default UseStateComponent