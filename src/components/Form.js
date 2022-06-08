import React from 'react'
import { v4 as uuid } from 'uuid';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([ 
            ...todos,
            { text: inputText, completed: false, id: uuid() }
        ]);
        setInputText("");
    };
    return (
        <div>
            <form>
                <input type="text" className="todo_text" placeholder="Enter Items..." onChange={inputTextHandler} value={inputText} />
                <button className="btn-Add" tybe="submit" onClick={submitTodoHandler}>Add</button>
            </form>
        </div>
    )
}

export default Form