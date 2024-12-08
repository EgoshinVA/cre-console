import {useEffect, useState} from "react";

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
    const [counter, setCounter] = useState(1)
    let da = new Date()
    const [date, setDate] = useState(da)

    useEffect(() => {
        console.log('useEffect')

        // setTimeout(() => {
        //     console.log('set timeout')
        //     document.title = counter.toString()
        // }, 1000)

        setInterval(() => {
            console.log('set interval')
            setDate(new Date()) // замыкание может испортить
        }, 1000)

    }, [date])


    return <>
        Hello, {date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
    </>
}