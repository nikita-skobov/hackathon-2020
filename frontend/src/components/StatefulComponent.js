import React from 'react'


export default class StatefulComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log('this component got constructed')
        this.state = {
            name: props.name || 'if props.name is not provided, use this'
        }

        // if you have custom functions, bind them this way:
        this.myCallbackFunction = this.myCallbackFunction.bind(this)
    }

    myCallbackFunction(e) {
        console.log('my callback function is clicked!')
        this.setState({ name: `${this.state.name}-appendedtext`})
    }

    componentDidMount() {
        console.log('this component got mounted!')
    }

    render() {
        console.log('rednering stateful component')
        const {
            name
        } = this.state

        return (
            <div>
                <div>
                    {name}
                </div>
                <input type="button" onClick={this.myCallbackFunction} />
            </div>
        )
    }
}