import {action} from '@storybook/addon-actions'

import {Accordion, ItemType} from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion,
};

const callBackOnChange = action('on Change')

const items:ItemType[] = [
    {title: 'Dimych', value: '1'},
    {title: 'Valera', value: '2'},
    {title: 'Ivan', value: '3'}
]

const onAccordionItemClick = action('some item was clicked');


export const CollapsedAccordion = () => {
    return <Accordion onClick={onAccordionItemClick} items={items} title={'Collapsed Accordion'} collapsed={true} changeCollapsed={callBackOnChange}/>
}

export const OpenedAccordion = () => {
    return <Accordion onClick={onAccordionItemClick} items={items} title={'Opened Accordion'} collapsed={false} changeCollapsed={callBackOnChange}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return <Accordion onClick={(id) => {alert(`User with id ${id} should be happy`)}} items={items} title={'Accordion'} collapsed={collapsed} changeCollapsed={() => setCollapsed(!collapsed)}/>
}