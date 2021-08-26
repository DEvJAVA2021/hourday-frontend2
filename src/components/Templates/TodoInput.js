import React from 'react';
import './TodoInput.scss';

const TodoInput = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                +
            </div>
        </div>
    )
}

export default TodoInput;