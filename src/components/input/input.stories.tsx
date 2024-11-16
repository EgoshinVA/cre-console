import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input'
};

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [title, setTitle] = useState<string>('')

    return <><input onChange={e => setTitle(e.currentTarget.value)}/>{title}</>
}
export const ControlledInput = () => {
    const [title, setTitle] = useState<string>('')

    return <input value={title} onChange={e => setTitle(e.currentTarget.value)}/>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [title, setTitle] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setTitle(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save
            </button>
            {title}
        </>)
}
export const ControlledInputFixed = () => <input value={'it-incubator'}/>

export const ControlledCheckbox = () => {
    const [value, setValue] = useState<boolean>(false)

    return <input checked={value} onChange={(e) => setValue(e.currentTarget.checked)} type={'checkbox'}/>
}

export const ControlledSelect = () => {
    const [currentValue, setCurrentValue] = useState<string | undefined>('2')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentValue(e.currentTarget.value)
    }

    return <><select value={currentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>London</option>
    </select>
        {currentValue}
    </>
}