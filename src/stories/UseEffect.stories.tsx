import {useEffect, useState} from "react";
import {Clocks} from "../components/clocks/Clocks";

export default {
    title: 'useEffect demo'
}

// export const SimpleExample = () => {
//     const [counter, setCounter] = useState(1)
//     console.log('SimpleExample')
//
//     useEffect(() => {
//         console.log('useEffect')
//
//         document.title = counter.toString() // изменение title всегда в сайд эффекте
//     }, [counter])
//
//     return <>
//         Hello, {counter}
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//     </>
// }

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('SetTimeoutExample')

    const handler = (e: KeyboardEvent) => {
        setText(text + e.key)
    }

    useEffect(() => {
        console.log('useEffect')


        setTimeout(() => {
            console.log('timeout')
            window.addEventListener('keypress', handler)
        }, 0)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])


    return <>
        Hello, {text}
    </>
}

export const SetClockExample = () => {
    return <Clocks type={'analog'}/>
}