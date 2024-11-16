import React from "react";
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

export const ControlledSelect = () => {
    const [value, setValue] = React.useState<string>('Some name');

    const changeValue = (value: string) => setValue(value);

    return <Select value={value} items={items} changeValue={changeValue}/>
}