import { FormEvent, useState } from "react"
import TasksList from "./TasksList"
import useTaskListState from "./useTaskListState";

function TodoApp() {

  const [newTask, setValue] = useState<string>('');

    const {tasks, addTask, deleteTask} = useTaskListState([]);
    
    function handelSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
     
        if(newTask.trim().length > 0) 
            addTask(newTask);
        setValue('');
    }

    return (
        <>     
            <form onSubmit={handelSubmit}>
                <div>
                    <input value={newTask} onChange= {(e) => {setValue(e.target.value)}}>
                    </input>
                </div>   
            </form>
            <TasksList tasks={tasks} deleteTask={deleteTask} />
        </>
    )
}

export default TodoApp
