// Todo.js
import React from 'react';
import { Button, Checkbox } from 'antd';
import './Todo.css';

const Todo = ({ text, completed, onToggle, onDelete, onDeleteAll }) => {
    return (
        <div class="button-container">
            <Checkbox checked={completed} onChange={onToggle}>
                {text}
            </Checkbox>
            <Button type='primary' onClick={onDelete}>
                Delete
            </Button>
        </div>
    );
};

export default Todo;