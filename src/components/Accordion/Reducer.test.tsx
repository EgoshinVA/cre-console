import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT});

    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT});

    //expectation
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because bad action type', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //expectation
    expect(() => reducer(state, {type: 'FAKE_TYPE'})).toThrowError()
})