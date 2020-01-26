import { applyMiddleware, createStore, compose } from 'redux'
import reducers from './reducers/index'

export function setupStore(
    allEnhancers = applyMiddleware(),
    // normally [thunk] would
    // go here, but I do not need redux-thunk for this project
    initialState = {},
    theReducers = reducers,
) {
    return createStore(theReducers, { ...initialState }, allEnhancers)
}

export function createEnhancers(middlewareArray) {
    // eslint-disable-next-line
    const composeFunc = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return composeFunc(applyMiddleware(...middlewareArray))
}