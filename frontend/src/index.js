import 'react-app-polyfill/ie9'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import './index.css'
import App from './components/App'
import { setupStore } from './setupStore'

const store = setupStore()


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)