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

    useEffect(() => {
        setIsOpen(false)
    }, [props.value])

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    }

    const onLabelBlur = () => {
        setIsOpen(false);
    }

    const selectedElement = props.items.find(el => el.value === props.value)

    return (
        <div>
            <div tabIndex={0} onBlur={onLabelBlur} onClick={onLabelClick} className={s.select}>
                <h3>{selectedElement ? selectedElement.title : 'Change name'}</h3>
                {isOpen && <div className={s.items}>
                    {props.items.map(item => <div key={item.value}
                                                  onClick={() => props.changeValue(item.value)}
                                                  className={s.selectItem}>{item.title}</div>)}
                </div>}
            </div>
        </div>
    );
};

//32 min