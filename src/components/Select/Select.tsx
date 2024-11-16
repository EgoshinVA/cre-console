import React, {useEffect} from 'react';
import {ItemType} from "../Accordion/Accordion";
import s from './Select.module.css'

type SelectPropsType = {
    value: string
    items: ItemType[]
    changeValue: (value: string) => void
}

export const Select: React.FC<SelectPropsType> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        setIsOpen(false)
    }, [props.value])

    const onLabelClick = () => {
        setIsOpen(true);
    }

    const onLabelBlur = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div onClick={onLabelClick} className={s.select}>
                {!isOpen && props.value}
                {isOpen && props.items.map(item => <div onClick={() => props.changeValue(item.title)} className={s.selectItem}>{item.title}</div>)}
            </div>
        </div>
    );
};