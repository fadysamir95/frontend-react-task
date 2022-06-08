import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            <hr />
            <ul>
                {/* <li>
                    <input type="checkbox" checked />
                    <span className="checked">list1</span>
                    <button className="trash-btn">Delete</button>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="">list2</span>
                    <button className="trash-btn">Delete</button>
                </li> */}
                {todos.map((todo) => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList