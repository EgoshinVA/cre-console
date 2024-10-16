import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export const SelfControlAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle changeCollapsed={changeCollapsed} title={props.title}/>
            {!collapsed && <AccordionBody/>}
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