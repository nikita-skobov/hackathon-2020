import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Radar from 'radar-sdk-js'

import Home from './Home'

import Map from './Map'

export function App(props) {
    return (
        <div className="h-100">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/map" component={Map} />
            </Switch>
        </div>
    )
}


export default App