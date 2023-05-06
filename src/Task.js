export const Task=(props)=>{
    return(
        <div className="task">
            {props.taskName}
            <button onClick={()=>props.deleteTask(props.taskObj)} className="task button">delete</button>
        </div>
    );
}