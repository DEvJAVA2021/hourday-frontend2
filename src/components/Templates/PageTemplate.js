import React from 'react';
import './PageTemplate.scss';

const PageTemplate = ({ form, children }) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘의 플래너
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default PageTemplate;