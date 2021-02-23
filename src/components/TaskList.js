import '../App.css';
import Task from "./Task";
import NewTaskInput from "./NewTaskInput";

function TaskList({todoItems = [], toggleTask, addTask, deleteTask}) {
    return (
        <div className="task-list">
            <ul>
                {
                    todoItems.map((todoItem) =>
                        <Task
                            key={todoItem.id}
                            id={todoItem.id}
                            name={todoItem.name}
                            done={todoItem.done}
                            toggleTask={toggleTask}
                            deleteTask={deleteTask}
                        />)
                }
            </ul>
            <NewTaskInput addTask={addTask} />
        </div>
    );
}

export default TaskList;
