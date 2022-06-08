import React, { useState } from "react"
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(['list1']);
  return (
    <div className="App">
      <h2>Todo List</h2>
      <Form
        inputText={inputText}
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;