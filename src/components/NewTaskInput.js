import { useState } from 'react';

const NewTaskInput = ({addTask}) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue) return;

        addTask(inputValue);
        setInputValue('');
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add new task.." value={inputValue} onChange={handleInputChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default NewTaskInput;