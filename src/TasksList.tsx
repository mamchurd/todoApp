import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Task } from "./Task";
import { useEffect } from "react";
import useTaskList from "./useTasksList";


function TasksList({newTask} : {newTask: Task| undefined}){

    const {tasks, addTask, deleteTask, changeCheckTask} = useTaskList([]);
    
    useEffect(() => {2
        addTask(newTask);
    }, [newTask])

    return(
        <List>
            {tasks.map((task, index) => (
                <ListItem 
                    key={index} 
                    secondaryAction={
                        <IconButton edge='end' aria-label='delete' onClick={() => deleteTask(index)}>
                            <DeleteIcon />
                        </IconButton>
                    }
                    disablePadding>
                    <ListItemButton role={undefined} onClick={() => changeCheckTask(task)}>
                        <Checkbox checked={task.done}></Checkbox>
                        <ListItemText className={task.done ? "checked-task" : "not-checked-task"}>{task.text}</ListItemText>                        
                    </ListItemButton>                           
                </ListItem>
            ))}
        </List>
    )
}

export default TasksList