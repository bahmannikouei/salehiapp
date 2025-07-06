import { useState } from "react";

const Todoinput = ({onAdd}) => {

    const [todo , setTodo] = useState('');

    const handleAdd = () => {
        if (todo.trim()){
            onAdd(todo);
            setTodo('');
        }
    }

    return(
        <div>
              <input 
                    type = "text"
                    value = {todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    placeholder='Add a new ...'
                    required
                />
                <button onClick={handleAdd}>Add</button>
        </div>
    );
}


export default Todoinput;