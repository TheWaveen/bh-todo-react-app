import { useEffect, useState } from "react";
import TaskList from "../components/TaskList";

const TaskContainer = () => {
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        fetch('http://localhost:8000/todos')
            .then(res => res.json())
            .then(data => setTodoItems(data))
    }

    const toggleTask = (id, checkboxValue) => {
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: checkboxValue
            })
        });
    }

    const addTask = (taskName) => {
        const task = {
            name: taskName,
            done: false
        }

        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(() => fetchTasks())
    }

    const deleteTask = (id) => {
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE'
        }).then(() => fetchTasks())
    }

    return (
        <div>
            <h1>Things to do</h1>
            {
                todoItems &&
                    <TaskList
                        todoItems={todoItems}
                        toggleTask={toggleTask}
                        addTask={addTask}
                        deleteTask={deleteTask}
                    />
            }
        </div>
    )
}

export default TaskContainer;