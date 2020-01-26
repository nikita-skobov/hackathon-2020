import { combineReducers } from 'redux'


const initialStates = {
    someReducer: 'abc',
}

export function someReducer(
    state = initialStates.someReducer,
    action,
) {
    switch (action.type) {
        default:
            return state
    }
}


export default combineReducers({
    someReducer,
})