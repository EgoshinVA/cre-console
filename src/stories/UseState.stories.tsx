import {useState} from "react";

export default {
    title: 'useState'
}

function getNumber() {
    return 1
}

export const useStateExample = () => {
    const [counter, setCounter] = useState(getNumber)

    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            <h2>{counter}</h2>
        </div>
    )
}