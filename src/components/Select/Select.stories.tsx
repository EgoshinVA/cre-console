import React, {useState} from "react";
import {Select} from "./Select";
import {ItemType} from "../Accordion/Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'select'
};

const items: ItemType[] = [
    {title: 'Dima', value: '1'},
    {title: 'Valera', value: '2'},
    {title: 'Ivan', value: '3'}
]

const onChangeValue = action('click on label')

export const SelectWithValue = () => {
    const [value, setValue] = useState<string>('1')

    return <Select value={value} items={items} changeValue={setValue}/>
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState<string>('')

    return <Select value={value} items={items} changeValue={setValue}/>
}