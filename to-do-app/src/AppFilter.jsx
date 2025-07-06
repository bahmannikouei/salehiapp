import React, {useState} from 'react';
import './App.css';
import Swal from 'sweetalert2';

const App = () =>{
    const [todo , setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const bannedWords = ['olagh','xxx'];

    const addTodo = () =>{
        if (todo) {
            if (bannedWords.includes(todo.toLocaleLowerCase())){
                alert("Invalid name" + todo );
                setTodo('');
            }else {
                setTodos([...todos,todo]);
                setTodo('');
            }
        }
    };

    const deleteTodo = (index) => {
        setTodos (todos.filter((_,i)=> i !== index));
    }

    const confirmDelete = (index) => {
        Swal.fire({
            title : 'آیا مطمئن هستید؟',
            text: '',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'No, Cancel',
        }).then ((result) => {
            if(result.isConfirmed){
                deleteTodo(index);
                Swal.fire('آیتم باموفقیت حذف شد', 'success');
            }
        })
    }


return(
    <div>
        <div>
            <h1>To Do List</h1>
            <div>
                <input 
                type="text" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Add a new task'
                />
                <button onClick={addTodo}> Add</button>
            </div>
        </div>
        <div>
            <ul>
                {todos.map(
                    (item, index) => (
                        <li key={index}>
                        <span>{item}</span>
                        <button onClick={() => confirmDelete(index)}>Delete</button>
                        </li>
                    )
                )}
            </ul>
        </div>
    </div>
);
}

export default App;