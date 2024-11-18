import React, {useState} from "react";

export type ItemType = {
    title: string
    value: any
}

type UncontrolledAccordionPropsType = {
    title: string
    items: ItemType[]
    onClick: (value: any) => void
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    return state
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle changeCollapsed={() => setCollapsed(!collapsed)} title={props.title}/>
            {!collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}

const AccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {
    return (
        <div>
            <h3 onClick={props.changeCollapsed}>{props.title}</h3>
        </div>
    )
}

type UncontrolledAccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody: React.FC<UncontrolledAccordionBodyPropsType> = (props) => {
    return (
        <div>
            <ul>
                {props.items.map((item, i) => <li onClick={()=>{props.onClick(item.value)}} key={i}>{item.title}</li>)}
            </ul>
        </div>
    )//12 min
}