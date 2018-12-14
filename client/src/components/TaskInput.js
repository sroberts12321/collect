import React, { Component } from 'react'

class TaskInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',

        }
    }
    handleChange = (e) => {
        let userInput = e.target.value
        let updatedState = {}
        updatedState[e.target.name] = userInput
        this.setState(updatedState)
    }
    submit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input name="title" onChange={this.handleChange} value={this.state.title} />
                    <input name="description" onChange={this.handleChange} value={this.state.description} />
                    <input type="submit" />
                </form>
            </div >
        )
    }
}

export default TaskInput;