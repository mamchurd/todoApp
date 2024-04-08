import { useState } from "react"

function useTaskListState(initialValue: string[])
{
    const [tasks, setTasks] = useState<string[]>(initialValue)

    function handleDeleteTask(tasksIndex: number){
        const newTasks = tasks.filter((_, index: number) => index !== tasksIndex);
        setTasks(newTasks);    
    }

    return {
        tasks,
        addTask: (newTask: string) => {setTasks((tasks) => [...tasks, newTask])},
        deleteTask: handleDeleteTask
    }
}

export default useTaskListState