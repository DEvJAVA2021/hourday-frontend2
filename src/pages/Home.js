import React, { Component } from 'react';
import PageTemplate from '../components/PageTemplate/PageTemplate';
import TodoInput from '../components/PageTemplate/TodoInput';

class Home extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInput />
            </PageTemplate>
        );
    }
}

export default Home;