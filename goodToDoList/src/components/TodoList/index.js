import React from 'react'
import TodoListItem from "../ListItem";

const TodoList = ({todoData, setImportant, deleteItem}) => {
    return (
        <ul>
            {todoData.map((item, id) => <TodoListItem value = {item.value} isImportant={item.isImportant}
                                                      setImportant={() => setImportant(id)}
                                                      key = {id}
                                                      isDone={item.isDone}
                                                      deleteItem = {() => deleteItem(id)
                                                      }
            />)
            }
        </ul>
    )
};

export default TodoList;