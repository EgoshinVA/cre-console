import React from "react";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    items: ItemType[]
    changeCollapsed: () => void
    onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle changeCollapsed={props.changeCollapsed} title={props.title}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={props.changeCollapsed}>{props.title}</h3>
        </div>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody: React.FC<AccordionBodyPropsType> = (props) => {
    return (
        <div>
            <ul>
                {props.items.map((item, i) => <li onClick={()=>{props.onClick(item.value)}} key={i}>{item.title}</li>)}
            </ul>
        </div>
    )
}