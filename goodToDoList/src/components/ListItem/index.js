import React from 'react'

const TodoListItem = ({value, setImportant, isImportant, deleteItem, setDone, isDone}) => {
    const style = {
        color: isImportant ? 'blue' : 'black',
        textDecoration: isDone ? 'line-through' : 'none'
    };

    return (
        <li>
            <span onClick={setDone} style = {style}>{value}</span>
            <button onClick={setImportant}>Important</button>
            <button onClick={deleteItem}>Delete</button>
            <button onClick={setDone}>Done</button>
        </li>
    );
};

export default TodoListItem;