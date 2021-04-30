import React from 'react'
import "./to-do.css"

class TODO extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            items: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ text: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.text.length === 0) return

        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }
    render() {
        return (

            <div>


                <h1><span style={{ color: "green" }}>TODO </span><span style={{ color: "white" }}>Application</span></h1>
                <TODOList todoItems={this.state.items} />
                <form id="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="id">Tasks to do </label>
                    <input id="id" onChange={this.handleChange} value={this.state.text} /><br />

                    <button >Add</button>
                </form>

            </div>
        );
    }
}
export default TODO

class TODOList extends React.Component {
    render() {
        return (

            <ul size>
                {this.props.todoItems.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>

        )
    }
}