import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: () => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle changeCollapsed={props.changeCollapsed} title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
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

const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}