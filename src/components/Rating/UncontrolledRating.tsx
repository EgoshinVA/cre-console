import React, {useReducer, useState} from "react";

const CHANGE_STARS_CONSTANT = 'CHANGE-STARS-COUNT'

type ActionType = {
    type: string,
    value: number
}

const reducer = (state: number, action: ActionType) => {
    switch (action.type) {
        case CHANGE_STARS_CONSTANT:
            return action.value
        default:
            throw new Error(`Unknown action type ${action.type}`)
    }
}


function UncontrolledRating() {
    // const [starsCount, setStarsCount] = useState<number>(0)
    const [starsCount, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <Star changeStarsCount={() => dispatch({type: CHANGE_STARS_CONSTANT, value: 1})}
                  selected={starsCount >= 1}/>
            <Star changeStarsCount={() => dispatch({type: CHANGE_STARS_CONSTANT, value: 2})}
                  selected={starsCount >= 2}/>
            <Star changeStarsCount={() => dispatch({type: CHANGE_STARS_CONSTANT, value: 3})}
                  selected={starsCount >= 3}/>
            <Star changeStarsCount={() => dispatch({type: CHANGE_STARS_CONSTANT, value: 4})}
                  selected={starsCount >= 4}/>
            <Star changeStarsCount={() => dispatch({type: CHANGE_STARS_CONSTANT, value: 5})}
                  selected={starsCount >= 5}/>
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

export default UncontrolledRating