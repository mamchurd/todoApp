import { FormEvent, useState } from "react";
import { Task } from "./Task";
import { TextField } from "@mui/material";
import TasksList from "./TasksList";

function TodoApp() {

    const [text, setText] = useState<string>('');
    const [newTask, setTask] = useState<Task>();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if(text.trim().length > 0)
            setTask(new Task(text.trim(), false));
        setText('');
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField 
                    variant='outlined'
                    label="Add task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}>
                </TextField>
            </form>
            <TasksList newTask={newTask}></TasksList>
        </>
    )
}

export default TodoApp
