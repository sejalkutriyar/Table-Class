import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component {
    constructor() {
        super();
        this.state = {input: "", table: 0, multiplier: 1}
    }
    addTable = () => {
        this.setState({table: this.state.input})
        this.setState({multiplier: 1})
        this.setState({input: ""})
    }
    increment = () => {
        this.setState({multiplier: this.state.multiplier + 1})
    }
    decrement = () => {
        this.setState({multiplier: this.state.multiplier - 1})
    }
    render () {
        return (
            <div>
                <input 
                type = "number"
                value = {this.state.input}
                placeholder = "Enter a number"
                onChange = {(e) => this.setState({input: e.target.value}) }
                ></input>
                <button onClick ={this.addTable}>Add</button>
                <h1> Table of {this.state.table}</h1>
                <button onClick = {this.decrement}>-</button>
                <button onClick = {this.increment}>+</button>
                <p>{this.state.table} X {this.state.multiplier} = {this.state.table * this.state.multiplier}</p>
            </div>
        )
    } 
}