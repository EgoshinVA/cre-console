import {useMemo, useState} from "react";

export default {
    title: "useMemo"
}

export const Example1 = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++){
            tempResultA *= i
            let f = 1
            while (f < 100000000){
                f++
                const fakeValue = Math.random()
            }

        }

        return tempResultA
    }, [a]);

    let resultB = useMemo(() => {
        let tempResultB = 1
        for (let i = 1; i <= b; i++)
            tempResultB *= i
        return tempResultB
    }, [b]);

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}
