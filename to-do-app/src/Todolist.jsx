import React, {useState} from 'react';
import './App.css';
const App = () => {
    const [todo , setTodo] = useState('');
    const [todos , setTodos] = useState([]);


    const addTodo = () => {
        console.log(todo);
        
        if(todo){
            setTodos([...todos, todo]);
            setTodo('');
        }else {
            console.log('Input is Empty...');
        }
    }

    const deleteTodo = (index) =>{
        setTodos(todos.filter((_,i) => i !== index));
    }

    return(
        <div>
            <h1>To Do List</h1>
            <div>
                <input 
                    type = "text"
                    value = {todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    placeholder='Add a new ...'
                />
                <button onMouseLeave={addTodo}>Add</button>
            </div>

            <div className='list'>
                <ul>
                    {todos.map((item, index) => (
                        <li key={index}><span>{item}</span>
                        <button className='del' onClick={()=> deleteTodo(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default App;