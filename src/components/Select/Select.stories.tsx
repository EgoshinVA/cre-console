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

const cities: ItemType[] = [
    {title: 'Minsk', value: 1000000},
    {title: 'Novosibirsk', value: 800000},
    {title: 'Artemievsk', value: 600000},
    {title: 'Moscow', value: 1200000},
    {title: 'Kiev', value: 2000000},
    {title: 'Paris', value: 900000},
    {title: 'Berlin', value: 1060000},
    {title: 'Vena', value: 8000000},
    {title: 'Rome', value: 1300000},
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

export const SelectCitiesUsingUseMemo = () => {
    const [value, setValue] = useState<string>('')

    const filteredCities = (cities: ItemType[], filter: string) => {
        if (filter === 'million') return cities.filter(c => c.value >= 1000000)
        if (filter === 'letterA') return cities.filter(c => c.title.includes('a'))
        if (filter === 'letter4') return cities.filter(c => c.title.length <= 4)
        return cities
    }

    return <div style={{display: 'flex'}}>
        <Select value={value} items={filteredCities(cities, 'million')} changeValue={setValue}/>
        <Select value={value} items={filteredCities(cities, 'letterA')} changeValue={setValue}/>
        <Select value={value} items={filteredCities(cities, 'letter4')} changeValue={setValue}/>
    </div>
}