import React, { Component } from 'react';
import PageTemplate from '../components/PageTemplate/PageTemplate';
import TodoInput from '../components/PageTemplate/TodoInput';
import TodoItemList from '../components/PageTemplate/TodoItemList';

class Home extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInput />
                <TodoItemList />
            </PageTemplate>
        );
    }
}

export default Home;