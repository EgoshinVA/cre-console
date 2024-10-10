import React from "react";

type RatingPropsType = {
    starsCount: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.starsCount >= 1}/>
            <Star selected={props.starsCount >= 2}/>
            <Star selected={props.starsCount >= 3}/>
            <Star selected={props.starsCount >= 4}/>
            <Star selected={props.starsCount >= 5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return (
        <span>{props.selected ? <b>Star </b> : <a>Star </a>}</span>
    )
}

export default Rating