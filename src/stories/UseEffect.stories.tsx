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

// export const SetTimeoutExample = () => {
//     const [counter, setCounter] = useState(1)
//     console.log('SetTimeoutExample')
//
//     useEffect(() => {
//         console.log('useEffect')
//
//         // setTimeout(() => {
//         //     console.log('set timeout')
//         //     document.title = counter.toString()
//         // }, 1000)
//
//         // setInterval(() => {
//         //     setCounter(state => state + 1) // замыкание может испортить
//         // }, 1000)
//
//     }, [])
//
//
//     return <>
//         Hello, {counter}
//         {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
//     </>
// }

export const SetClockExample = () => {
    return <Clocks type={'analog'}/>
}