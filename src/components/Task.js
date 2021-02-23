const Task = ({id, name, done, toggleTask, deleteTask}) => {
    const handleCheckboxChange = (checkboxValue) => {
        toggleTask(id, checkboxValue.target.checked)
    }

    const handleDelete = () => {
        deleteTask(id);
    }

    return <li className="task-item">
        <span className="delete-button" onClick={handleDelete}>x</span>
        <input type="checkbox" name="done" id={`${name}-done`} defaultChecked={done} onChange={handleCheckboxChange} />
        <label htmlFor={`${name}-done`} >{name}</label>
    </li>
}

export default Task;