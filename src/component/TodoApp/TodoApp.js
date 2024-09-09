import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
    state = {
        inputs: "",
        items: []
    };
    handleChange = event => {
        this.setState({
            input: event.target.value
        });
    };
    storeItems = event => {
        event.preventDefault();
        const { input } = this.state;
        this.setState({
            items: [...this.state.items, input],
            input: ""
        })

    };
    deleteItems = key => {
        

        this.setState({
           items:this.state.items.filter((data,index) => index !==key)
        });
    }
    render() {
        const { input, items } = this.state;
        console.log(items);
        return (

            <div className='todo-container'>

                <form className='input_section' onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input type="text" value={input} onChange={this.handleChange} placeholder='Enter Items...' />
                </form>
                <ul>
                    {items.map((data, index) =>
                        <li key={index}>{data}<i className="fas fa-trash-alt" onClick={() => this.deleteItems(index)}></i></li>)}
                </ul>
            </div>
        )
    }
}
