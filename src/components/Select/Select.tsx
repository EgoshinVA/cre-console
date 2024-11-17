import React, {useEffect, useState} from 'react';
import {ItemType} from "../Accordion/Accordion";
import s from './Select.module.css'

type SelectPropsType = {
    value?: string
    items: ItemType[]
    changeValue: (value: string) => void
}

export const Select: React.FC<SelectPropsType> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    }

    const onLabelBlur = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedElement = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                if (props.items[i + 1] && e.key === 'ArrowDown') {
                    props.changeValue(props.items[i + 1].value);
                    return;
                }
                if (props.items[i - 1] && e.key === 'ArrowUp') {
                    props.changeValue(props.items[i - 1].value);
                    return;
                }
            }
        }
        !hoveredItem && props.changeValue(props.items[0].value);
        e.key === 'Escape' && onLabelBlur()
    }

    return (
        <div>
            <div tabIndex={0} onBlur={onLabelBlur} onClick={onLabelClick} className={s.select} onKeyDown={onKeyDown}>
                <h3>{selectedElement ? selectedElement.title : 'Change name'}</h3>
                {isOpen && <div className={s.items}>
                    {props.items.map(item => <div
                        onMouseEnter={() => setHoveredElementValue(item.value)}
                        key={item.value}
                        onClick={() => props.changeValue(item.value)}
                        className={hoveredItem === item ? s.selectedItem : s.selectItem}>{item.title}</div>)}
                </div>}
            </div>
        </div>
    );
};