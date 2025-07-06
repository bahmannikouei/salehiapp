import React, {useState} from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';

const App = () => {
    const [todos , setTodos] = useState(['']);


    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const deleteTodo = (index) =>{
        setTodos(todos.filter((_,i) => i !== index));
    }

    return(
        <div className='con bahman salehi btn-m'>
            <h1>To Do List</h1>
            <div style='color:red;'>
              <Todoinput onAdd={addTodo}/>
            </div>
            <Todolist todos={todos} onDelete={deleteTodo} myName={10+30} />
        </div>
    )

}

export default App;