import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoItemList extends Component {
    render() {
        //const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="안녕" />
                <TodoItem text="리액트 공부" />
            </div>
        );
    }
}

export default TodoItemList;