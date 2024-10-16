import React from "react";

type RatingPropsType = {
    starsCount: 0 | 1 | 2 | 3 | 4 | 5
    changeStarsCount: (count: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star changeStarsCount={() => props.changeStarsCount(1)} selected={props.starsCount >= 1}/>
            <Star changeStarsCount={() => props.changeStarsCount(2)} selected={props.starsCount >= 2}/>
            <Star changeStarsCount={() => props.changeStarsCount(3)} selected={props.starsCount >= 3}/>
            <Star changeStarsCount={() => props.changeStarsCount(4)} selected={props.starsCount >= 4}/>
            <Star changeStarsCount={() => props.changeStarsCount(5)} selected={props.starsCount >= 5}/>
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

export default Rating