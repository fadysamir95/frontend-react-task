import React from 'react'

const Todo = ({ text=["list 1"], todos, setTodos, todo }) => {
    
    // Delete
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id));
        // console.log(todo);
    }

    // Complete
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    }

    return (
        <div>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                <input type="checkbox" onClick={completeHandler} />
                <span>{text}</span>
                <button onClick={deleteHandler}>Delete</button>
            </li>
        </div>
    )
}

export default Todo