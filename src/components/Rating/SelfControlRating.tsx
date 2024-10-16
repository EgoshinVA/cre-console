import React, {useState} from "react";

export const SelfControlRating = () => {

    const [starsCount, setStarsCount] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    const changeStarsCount = (count: 0 | 1 | 2 | 3 | 4 | 5) => {
        setStarsCount(count)
    }

    return (
        <div>
            <Star changeStarsCount={() => changeStarsCount(1)} selected={starsCount >= 1}/>
            <Star changeStarsCount={() => changeStarsCount(2)} selected={starsCount >= 2}/>
            <Star changeStarsCount={() => changeStarsCount(3)} selected={starsCount >= 3}/>
            <Star changeStarsCount={() => changeStarsCount(4)} selected={starsCount >= 4}/>
            <Star changeStarsCount={() => changeStarsCount(5)} selected={starsCount >= 5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    changeStarsCount: () => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.changeStarsCount}>{props.selected ? <b>Star </b> : <a>Star </a>}</span>
    )
}