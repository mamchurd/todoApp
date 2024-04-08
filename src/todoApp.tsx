import { FormEvent, useEffect, useRef, useState } from "react";
import { Task } from "./Task";

function TodoApp() {
    
    useEffect(() => {
        console.log('On first render')
        //const storageTasks = JSON.parse(localStorage.getItem("Tasks") || '""');
        //if (storageTasks !== "") 
        //    setTasks(storageTasks);
        return () => {
            console.log('On unmount');
            console.log(refTasks); 
            localStorage.setItem("Tasks", JSON.stringify(refTasks.current));
        }
            
    }, [])

    const storageTasks = JSON.parse(localStorage.getItem("Tasks") || '""');

    const [text, setText] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>(storageTasks);

    const refTasks = useRef(tasks);

    useEffect(() => {
        console.log('On tasks changed');
        refTasks.current = tasks;
        //console.log(refTasks.current);
        //localStorage.setItem("Tasks", JSON.stringify(tasks));
    },[tasks])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if(text.trim().length > 0)
            setTasks([...tasks, new Task(text, false)]);
            setText('');
    }

    function deleteTask(tasksIndex: number) {
        const newTasks = tasks.filter((_, index: number) => index !== tasksIndex);
        setTasks(newTasks);
    }

    function handleCheckChange(selectedTask: Task) {
        const newTasks = tasks.map((task) => {
            if (task == selectedTask) {
                return {
                    ...task,
                    done: !task.done
                };
            }

            return task;
        } )

        setTasks(newTasks);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <input 
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}>
            </input>
        </form>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <div>
                        <input type='checkbox' checked={task.done} onChange={() => handleCheckChange(task)}></input>
                        <span className={task.done ? "checked-task" : "not-checked-task"}>{task.text}</span>
                    </div>
                    <div>
                        <button onClick={() => deleteTask(index)}>Del</button>
                    </div>            
                </li>
            ))}
        </ul>
        </>
    )
}

export default TodoApp
