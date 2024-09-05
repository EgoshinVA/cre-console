import React from "react";

type RatingPropsType = {
    starsCount: number
}

function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
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