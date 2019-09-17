import React, { Component } from 'react';
import './colors.scss';
import './TodoList.scss';
import ItemsList from './ItemsList';

export default class TodoList extends Component {
  state = {
    text: '',
    items: [{ text: 'task1' }, { text: 'task2' }],
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };
  handleClick = e => {
    e.preventDefault();
    const newItem = { text: this.state.text };
    const newItemsState = [...this.state.items, newItem];
    this.setState({ items: newItemsState, text: '' });
  };
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form action="">
            <input
              type="text"
              placeholder="Task"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
            <button onClick={this.handleClick}>Add Task</button>
          </form>
        </div>

        <ItemsList items={this.state.items}></ItemsList>
      </div>
    );
  }
}
