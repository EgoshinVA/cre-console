import {action} from '@storybook/addon-actions'

import Rating from './Rating';
import React, {useState} from "react";

export default {
    component: Rating,
};

const callBackOnChange = action('on Change')

export const EmptyRating = () => <Rating starsCount={0} changeStarsCount={callBackOnChange}/>
export const Rating1 = () => <Rating starsCount={1} changeStarsCount={callBackOnChange}/>
export const Rating2 = () => <Rating starsCount={2} changeStarsCount={callBackOnChange}/>
export const Rating3 = () => <Rating starsCount={3} changeStarsCount={callBackOnChange}/>
export const Rating4 = () => <Rating starsCount={4} changeStarsCount={callBackOnChange}/>
export const Rating5 = () => <Rating starsCount={5} changeStarsCount={callBackOnChange}/>
export const ChangeRating = () => {
    const [starsCount, setStarsCount] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return <Rating starsCount={starsCount} changeStarsCount={setStarsCount}/>
}

