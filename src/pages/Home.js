import React, { Component } from 'react';
import PageTemplate from '../components/PageTemplate/PageTemplate';
import TodoInput from '../components/PageTemplate/TodoInput';
import TodoItemList from '../components/PageTemplate/TodoItemList';

class Home extends Component {
    id = 3 //예시로 0,1,2를 넣었기 때문에 3

    state = {
        input: '',
        todos: [
            { id: 0, text: 'spring 공부', checked: false },
            { id: 1, text: '리액트 에러 고치기', checked: false },
            { id: 2, text: '발표 자료 제작', checked: true }
        ]
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '', //인풋을 비운다
            todos: todos.concat({ //concat으로 배열에 추가한다
                id: this.id++,
                text: input,
                checked: false
            })
        });
    }

    handleKeyPress = (e) => { //엔터 눌러도 handleCreate 호출
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const nextTodos = {
            ...todos[index],
            checked: !todos[index].checked
        };

        this.setState({ //slice로 index 전후 데이터를 복사
            todos: [
                ...todos.slice(0, index),
                nextTodos,
                ...todos.slice(index + 1, todos.length)
            ]
        });
    }

    render() {
        const { input, todos } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress
        } = this;

        return (
            <PageTemplate>
                <TodoInput
                    onChange={handleChange}
                    value={input}
                    onKeyPress={handleKeyPress}
                    onCreate={handleCreate}
                />

                <TodoItemList todos={todos} onToggle={this.handleToggle} />
            </PageTemplate>
        );
    }
}


export default Home;