
interface TasksListProps{
    tasks : string[];
    deleteTask : (a: number) => void;
}

function TasksList(props: TasksListProps) {
    return (
        <ul>
            {props.tasks.map((task, index) => (
                <li key={index}>
                    <div>{task}</div>
                    <div>
                        <button onClick={() => props.deleteTask(index)}>Del</button>
                    </div>         
                </li>
            ))}
        </ul>
    )
}

export default TasksList;