import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

export type ItemType = {
    title: string
    value: any
}

type UncontrolledAccordionPropsType = {
    title: string
    items: ItemType[]
    onClick: (value: any) => void
}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle changeCollapsed={() => dispatch({type: TOGGLE_CONSTANT})} title={props.title}/>
            {!state.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
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
                {props.items.map((item, i) => <li onClick={() => {
                    props.onClick(item.value)
                }} key={i}>{item.title}</li>)}
            </ul>
        </div>
    )
}