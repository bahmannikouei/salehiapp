const Todolist = ({todos , onDelete, myName}) => {
return(
    <div className='list'>
        {myName}
    <ul>
        {todos.map((item, index) => (
            <li key={index}><span>{item}</span>
            <button className='del' onClick={()=> onDelete(index)}>X</button>
            </li>
        ))}
    </ul>
</div>
);
}

export default Todolist;