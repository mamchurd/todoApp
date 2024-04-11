import { useEffect, useState } from "react";
import { Task } from "./Task";
import useLocalStorage from "use-local-storage";

function useTaskList(defaultValue: Task[]){

    const [data, SetData] = useLocalStorage("Tasks", new Array<Task>);
    const [tasks, SetTasks] = useState<Task[]>(defaultValue);

    useEffect(() => {
        SetData(tasks);
    },[tasks])

    useEffect(() => {
        SetTasks(data);                    
    }, [])

    function AddTask(newTask: Task | undefined){
        if(newTask !== undefined){
            SetTasks([...tasks, newTask]);
        }
    }

    function DeleteTask(tasksIndex: number) {
        const newTasks = tasks.filter((_, index: number) => index !== tasksIndex);
        SetTasks(newTasks);
    }

    function HandleCheckChange(selectedTask: Task) {
        const newTasks = tasks.map((task) => {
            if (task == selectedTask) {
                task.done = !task.done;
            }

            return task;
        } )

        SetTasks(newTasks);
    }

    return {
        tasks,
        addTask: AddTask,
        deleteTask: DeleteTask,
        changeCheckTask: HandleCheckChange
    }

}

export default useTaskList